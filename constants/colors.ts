// Premium Anti-Tarnish Color Palette
export const colors = {
  // Primary Colors - Premium Black & Grey
  primary: '#1A1A1A',      // Deep Black
  secondary: '#2D2D2D',    // Charcoal Black
  tertiary: '#4A4A4A',     // Medium Grey
  
  // Accent Colors - Luxurious Gold
  accent: '#D4AF37',       // Classic Gold
  accentLight: '#F4E4A1',  // Light Gold
  accentDark: '#B8941F',   // Dark Gold
  
  // Background Colors
  background: '#FFFFFF',    // Pure White
  backgroundGrey: '#F8F8F8', // Light Grey Background
  backgroundDark: '#0F0F0F', // Very Dark Background
  
  // Text Colors
  textPrimary: '#1A1A1A',   // Primary Text (Black)
  textSecondary: '#4A4A4A', // Secondary Text (Grey)
  textLight: '#6B7280',     // Light Text
  textWhite: '#FFFFFF',     // White Text
  
  // Status Colors
  success: '#059669',       // Green for success states
  warning: '#D97706',       // Orange for warnings
  error: '#DC2626',         // Red for errors
  
  // Border Colors
  border: '#E5E7EB',        // Light border
  borderDark: '#374151',    // Dark border
  
  // Hover States
  hoverGold: '#E6C55A',     // Gold hover
  hoverBlack: '#333333',    // Black hover
  
  // Special Effects
  shadow: 'rgba(26, 26, 26, 0.1)',
  shadowDark: 'rgba(0, 0, 0, 0.3)',
  gradient: 'linear-gradient(135deg, #1A1A1A 0%, #2D2D2D 50%, #D4AF37 100%)',
  goldGradient: 'linear-gradient(135deg, #D4AF37 0%, #F4E4A1 50%, #B8941F 100%)',
} as const;

export type ColorKey = keyof typeof colors;