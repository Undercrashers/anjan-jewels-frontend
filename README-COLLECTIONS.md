# Collections Page - Query Parameter Structure

This document describes the query parameter structure used in the collections page for filtering and sorting jewelry products.

## Array Format

The application uses **bracket array format** for query parameters:

- Single value: `?color=gold`
- Multiple values: `?color[]=gold&color[]=silver`

## Supported Parameters

### Filters

#### `gender[]`

Filter by gender categories:

- `women` - Women's jewelry
- `men` - Men's jewelry
- `unisex` - Unisex jewelry

Example: `/collections?gender[]=women&gender[]=unisex`

#### `color[]`

Filter by available colors:

- `gold`, `silver`, `rose-gold`, `black`, `blue`, `white`, `platinum`, etc.

Example: `/collections?color[]=gold&color[]=silver`

#### `size[]`

Filter by product sizes:

- Necklace lengths: `16-inch`, `18-inch`, `20-inch`, `22-inch`, `24-inch`
- Bracelet sizes: `S`, `M`, `L`, `XL`
- Ring sizes: `5`, `6`, `7`, `8`, `9`, `10`, `11`, `12`

Example: `/collections?size[]=M&size[]=L`

#### `category[]`

Filter by product categories:

- `necklaces` - Necklaces and chains
- `bracelets` - Bracelets and bangles
- `earrings` - Earrings and studs
- `rings` - Rings and bands

Example: `/collections?category[]=necklaces&category[]=earrings`

#### `priceMin` & `priceMax`

Filter by price range (numeric values):

- `priceMin` - Minimum price (inclusive)
- `priceMax` - Maximum price (inclusive)

Example: `/collections?priceMin=1000&priceMax=5000`

#### `antiTarnish`

Filter by anti-tarnish feature (boolean):

- `true` - Show only anti-tarnish products
- `false` - Show only non-anti-tarnish products
- Omitted - Show all products

Example: `/collections?antiTarnish=true`

### Sorting

#### `sort`

Sort products by different criteria:

- `featured` (default) - Featured products first, then by featured rank
- `newest` - New products first
- `price_asc` - Price low to high
- `price_desc` - Price high to low

Example: `/collections?sort=price_asc`

### Pagination

#### `page`

Page number for pagination (starts at 1):

- Automatically reset to 1 when filters change
- Preserved when only sorting changes

Example: `/collections?page=2`

## Example URLs

### Basic filtering:

```
/collections?gender[]=women&color[]=gold
```

### Multiple filters with sorting:

```
/collections?gender[]=women&color[]=gold&color[]=silver&category[]=necklaces&sort=price_asc
```

### Price range filtering:

```
/collections?priceMin=2000&priceMax=8000&antiTarnish=true
```

### Complex filtering:

```
/collections?gender[]=women&gender[]=unisex&color[]=gold&size[]=M&size[]=L&category[]=bracelets&priceMin=1000&priceMax=5000&antiTarnish=true&sort=newest
```

## Implementation Details

- All query parsing is handled by `/src/lib/utils/query.ts`
- Server-side filtering happens in `/src/app/(root)/collections/page.tsx`
- Client-side URL updates use Next.js router with `{ shallow: true }`
- Deep linking is fully supported - any valid URL will render the correct filtered results
- Browser back/forward navigation preserves filter states

## Filter UI Components

- **Desktop**: Sidebar with expandable filter sections
- **Mobile**: Drawer overlay with same filter options
- **Active Filters**: Removable badge system showing current filters
- **URL Synchronization**: All filter changes immediately update the URL

All components are accessible with proper ARIA attributes and keyboard navigation support.
