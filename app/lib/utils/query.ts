/**
 * Query string utilities for the collections page
 * Uses query-string library with bracket arrayFormat for consistency
 * 
 * Array format: ?sizes[]=16-inch&sizes[]=18-inch
 */

import queryString from 'query-string';

export interface ParsedFilters {
  genders: string[];
  sizes: string[];
  categories: string[];
  priceMin?: number;
  priceMax?: number;
  antiTarnish?: boolean;
  sort?: string;
  page?: number;
  search?: string;
}

/**
 * Parse Next.js searchParams into a normalized filter object
 */
export function parseSearchParams(
  searchParams: Record<string, string | string[] | undefined>
): ParsedFilters {
  // Convert Next.js searchParams to URLSearchParams-like format for query-string
  const urlSearchParams = new URLSearchParams();
  
  Object.entries(searchParams).forEach(([key, value]) => {
    if (value !== undefined) {
      if (Array.isArray(value)) {
        value.forEach(v => urlSearchParams.append(key, v));
      } else {
        urlSearchParams.set(key, value);
      }
    }
  });

  const parsed = queryString.parse(urlSearchParams.toString(), { 
    arrayFormat: 'bracket',
    parseNumbers: true,
    parseBooleans: true 
  });

  return {
    genders: ensureArray(parsed.gender),
    sizes: ensureArray(parsed.size),
    categories: ensureArray(parsed.category),
    priceMin: typeof parsed.priceMin === 'number' ? parsed.priceMin : undefined,
    priceMax: typeof parsed.priceMax === 'number' ? parsed.priceMax : undefined,
    antiTarnish: typeof parsed.antiTarnish === 'boolean' ? parsed.antiTarnish : undefined,
    sort: typeof parsed.sort === 'string' ? parsed.sort : 'featured',
    page: typeof parsed.page === 'number' ? parsed.page : 1,
    search: typeof parsed.search === 'string' ? parsed.search : undefined
  };
}

/**
 * Build query string from filters object
 */
export function buildQueryFromFilters(filters: ParsedFilters): string {
  const queryObj: Record<string, string | string[] | number | boolean> = {};

  // Add array filters
  if (filters.genders.length > 0) queryObj.gender = filters.genders;
  if (filters.sizes.length > 0) queryObj.size = filters.sizes;
  if (filters.categories.length > 0) queryObj.category = filters.categories;

  // Add scalar filters
  if (filters.priceMin !== undefined) queryObj.priceMin = filters.priceMin;
  if (filters.priceMax !== undefined) queryObj.priceMax = filters.priceMax;
  if (filters.antiTarnish !== undefined) queryObj.antiTarnish = filters.antiTarnish;
  if (filters.sort && filters.sort !== 'featured') queryObj.sort = filters.sort;
  if (filters.page && filters.page > 1) queryObj.page = filters.page;
  if (filters.search) queryObj.search = filters.search;

  return queryString.stringify(queryObj, { 
    arrayFormat: 'bracket',
    skipNull: true,
    skipEmptyString: true 
  });
}

/**
 * Update query string with a specific filter
 */
export function updateQueryWithFilter(
  currentQuery: string,
  key: string,
  value: string | string[],
  mode: 'add' | 'remove' | 'set'
): string {
  const parsed = queryString.parse(currentQuery, { arrayFormat: 'bracket' });
  
  if (mode === 'set') {
    parsed[key] = value;
  } else if (mode === 'add') {
    const existing = ensureArray(parsed[key]);
    const newValues = ensureArray(value);
    
    // Add new values that don't already exist
    newValues.forEach(newVal => {
      if (!existing.includes(newVal)) {
        existing.push(newVal);
      }
    });
    
    parsed[key] = existing.length > 0 ? existing : null;
  } else if (mode === 'remove') {
    const existing = ensureArray(parsed[key]);
    const removeValues = ensureArray(value);
    
    const filtered = existing.filter(item => !removeValues.includes(item));
    parsed[key] = filtered.length > 0 ? filtered : null;
  }

  // Reset page to 1 when filters change
  if (key !== 'page') {
    parsed.page = null;
  }

  return queryString.stringify(parsed, { 
    arrayFormat: 'bracket',
    skipNull: true,
    skipEmptyString: true 
  });
}

/**
 * Remove a query parameter entirely
 */
export function removeQueryParam(currentQuery: string, key: string): string {
  const parsed = queryString.parse(currentQuery, { arrayFormat: 'bracket' });
  delete parsed[key];
  
  return queryString.stringify(parsed, { 
    arrayFormat: 'bracket',
    skipNull: true,
    skipEmptyString: true 
  });
}

/**
 * Reset pagination to page 1
 */
export function resetPagination(currentQuery: string): string {
  const parsed = queryString.parse(currentQuery, { arrayFormat: 'bracket' });
  delete parsed.page;
  
  return queryString.stringify(parsed, { 
    arrayFormat: 'bracket',
    skipNull: true,
    skipEmptyString: true 
  });
}

/**
 * Clear all filters except sort
 */
export function clearAllFilters(currentQuery: string): string {
  const parsed = queryString.parse(currentQuery, { arrayFormat: 'bracket' });
  const sortValue = parsed.sort;
  
  return queryString.stringify(
    sortValue ? { sort: sortValue } : {}, 
    { arrayFormat: 'bracket' }
  );
}

/**
 * Get filter count for displaying active filter badges
 */
export function getActiveFilterCount(filters: ParsedFilters): number {
  let count = 0;
  count += filters.genders.length;
  count += filters.sizes.length;
  count += filters.categories.length;
  if (filters.priceMin !== undefined || filters.priceMax !== undefined) count += 1;
  if (filters.antiTarnish !== undefined) count += 1;
  if (filters.search) count += 1;
  return count;
}

/**
 * Helper function to ensure value is an array
 */
function ensureArray(value: unknown): string[] {
  if (Array.isArray(value)) {
    return value.map(String);
  }
  if (value !== undefined && value !== null && value !== '') {
    return [String(value)];
  }
  return [];
}