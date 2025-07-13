import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		// === RESPONSIVE BREAKPOINTS ===
		screens: {
			'xs': '475px',
			'sm': '640px',
			'md': '768px',
			'lg': '1024px',
			'xl': '1280px',
			'2xl': '1536px',
			'3xl': '1920px',
		},

		container: {
			center: true,
			padding: {
				DEFAULT: '1rem',
				sm: '1.5rem',
				lg: '2rem',
				xl: '3rem',
				'2xl': '4rem',
			},
			screens: {
				'2xl': '1400px'
			}
		},

		extend: {
			// === TYPOGRAPHY SYSTEM ===
			fontFamily: {
				sans: ['Inter', 'system-ui', 'sans-serif'],
				display: ['Inter', 'system-ui', 'sans-serif'],
				mono: ['JetBrains Mono', 'Monaco', 'Consolas', 'monospace'],
			},

			fontSize: {
				'xs': ['0.75rem', { lineHeight: '1rem' }],
				'sm': ['0.875rem', { lineHeight: '1.25rem' }],
				'base': ['1rem', { lineHeight: '1.5rem' }],
				'lg': ['1.125rem', { lineHeight: '1.75rem' }],
				'xl': ['1.25rem', { lineHeight: '1.75rem' }],
				'2xl': ['1.5rem', { lineHeight: '2rem' }],
				'3xl': ['1.875rem', { lineHeight: '2.25rem' }],
				'4xl': ['2.25rem', { lineHeight: '2.5rem' }],
				'5xl': ['3rem', { lineHeight: '1' }],
				'6xl': ['3.75rem', { lineHeight: '1' }],
				'7xl': ['4.5rem', { lineHeight: '1' }],
				'8xl': ['6rem', { lineHeight: '1' }],
				'9xl': ['8rem', { lineHeight: '1' }],
			},

			// === MODERN BRAVIO COLOR SYSTEM ===
			colors: {
				// === ENHANCED BRAVIO BRAND COLORS ===
				bravio: {
					50: '#fefcf7',    // Ultra light cream
					100: '#fcf6ea',   // Very light cream  
					200: '#f7ead1',   // Light cream
					300: '#f0d8a8',   // Soft beige
					400: '#e6c57f',   // Light gold
					500: '#CBAF5C',   // Main primary - refined muted gold
					600: '#b89a4f',   // Medium gold
					700: '#a18642',   // Deep gold
					800: '#856d37',   // Rich bronze
					900: '#6e5a2f',   // Dark bronze
					950: '#413520',   // Very dark bronze
				},

				// Enhanced sophisticated grays
				gray: {
					50: '#fafafa',    // Ultra light
					100: '#f7f7f7',   // Very light
					200: '#eeeeee',   // Light
					300: '#d8d8d8',   // Soft
					400: '#adadad',   // Medium light
					500: '#7a7a7a',   // Medium
					600: '#5a5a5a',   // Medium dark
					700: '#404040',   // Dark
					800: '#333333',   // Main secondary - sophisticated dark
					900: '#262626',   // Very dark
					950: '#1a1a1a',   // Ultra dark
				},

				// Refined accent colors for CTAs
				accent: {
					50: '#fefaec',    // Ultra light amber
					100: '#fef2d2',   // Very light amber
					200: '#fde2a5',   // Light amber
					300: '#fbcc6d',   // Soft amber
					400: '#f8af33',   // Medium amber
					500: '#A77F1A',   // Main accent - attention gold
					600: '#946f17',   // Deep amber
					700: '#7c5e15',   // Rich amber
					800: '#674e16',   // Dark amber
					900: '#574118',   // Very dark amber
					950: '#32240b',   // Ultra dark amber
				},

				// Modern neutral backgrounds
				cream: '#FAF9F5',     // Warm sophisticated background
				border: '#E8E4DC',    // Elegant border color
				text: '#1D1D1D',      // Sharp text color

				// Enhanced semantic colors
				success: {
					50: '#f0fdf4',
					100: '#dcfce7',
					200: '#bbf7d0',
					300: '#86efac',
					400: '#4ade80',
					500: '#22c55e',
					600: '#16a34a',
					700: '#15803d',
					800: '#166534',
					900: '#14532d',
				},

				warning: {
					50: '#fffbeb',
					100: '#fef3c7',
					200: '#fde68a',
					300: '#fcd34d',
					400: '#fbbf24',
					500: '#f59e0b',
					600: '#d97706',
					700: '#b45309',
					800: '#92400e',
					900: '#78350f',
				},

				error: {
					50: '#fef2f2',
					100: '#fee2e2',
					200: '#fecaca',
					300: '#fca5a5',
					400: '#f87171',
					500: '#ef4444',
					600: '#dc2626',
					700: '#b91c1c',
					800: '#991b1b',
					900: '#7f1d1d',
				},

				// Component-specific modern colors
				primary: {
					DEFAULT: '#CBAF5C',
					foreground: '#ffffff',
				},

				background: '#FAF9F5',
				foreground: '#1D1D1D',

				card: {
					DEFAULT: '#ffffff',
					foreground: '#1D1D1D',
				},

				popover: {
					DEFAULT: '#ffffff',
					foreground: '#1D1D1D',
				},

				secondary: {
					DEFAULT: '#333333',
					foreground: '#ffffff',
				},

				muted: {
					DEFAULT: '#f7f7f7',
					foreground: '#5a5a5a',
				},

				destructive: {
					DEFAULT: '#ef4444',
					foreground: '#ffffff',
				},

				border: '#E8E4DC',
				input: '#E8E4DC',
				ring: '#CBAF5C',

				sidebar: {
					DEFAULT: '#ffffff',
					foreground: '#1D1D1D',
					primary: '#CBAF5C',
					'primary-foreground': '#ffffff',
					accent: '#f7f7f7',
					'accent-foreground': '#1D1D1D',
					border: '#E8E4DC',
					ring: '#CBAF5C',
				},
			},

			// === ENHANCED SPACING SYSTEM ===
			spacing: {
				'18': '4.5rem',
				'22': '5.5rem',
				'26': '6.5rem',
				'30': '7.5rem',
				'34': '8.5rem',
				'38': '9.5rem',
				'42': '10.5rem',
				'46': '11.5rem',
				'50': '12.5rem',
				'54': '13.5rem',
				'58': '14.5rem',
				'62': '15.5rem',
				'66': '16.5rem',
				'70': '17.5rem',
				'74': '18.5rem',
				'78': '19.5rem',
				'82': '20.5rem',
				'86': '21.5rem',
				'90': '22.5rem',
				'94': '23.5rem',
				'98': '24.5rem',
			},

			// === MODERN BORDER RADIUS ===
			borderRadius: {
				'none': '0',
				'sm': '0.125rem',
				DEFAULT: '0.5rem',
				'md': '0.75rem',
				'lg': '1rem',
				'xl': '1.25rem',
				'2xl': '1.5rem',
				'3xl': '2rem',
				'4xl': '2.5rem',
				'full': '9999px',
			},

			// === ENHANCED SHADOW SYSTEM ===
			boxShadow: {
				'sm': '0 1px 2px 0 rgba(29, 29, 29, 0.05)',
				DEFAULT: '0 1px 3px 0 rgba(29, 29, 29, 0.1), 0 1px 2px 0 rgba(29, 29, 29, 0.06)',
				'md': '0 4px 6px -1px rgba(29, 29, 29, 0.1), 0 2px 4px -1px rgba(29, 29, 29, 0.06)',
				'lg': '0 10px 15px -3px rgba(29, 29, 29, 0.1), 0 4px 6px -2px rgba(29, 29, 29, 0.05)',
				'xl': '0 20px 25px -5px rgba(29, 29, 29, 0.1), 0 10px 10px -5px rgba(29, 29, 29, 0.04)',
				'2xl': '0 25px 50px -12px rgba(29, 29, 29, 0.25)',

				// Enhanced BRAVIO shadows
				'card': '0 4px 12px 0 rgba(203, 175, 92, 0.08), 0 2px 4px 0 rgba(29, 29, 29, 0.06)',
				'card-hover': '0 12px 32px -8px rgba(203, 175, 92, 0.15), 0 8px 16px -4px rgba(29, 29, 29, 0.08)',
				'elevated': '0 16px 24px -8px rgba(203, 175, 92, 0.12), 0 8px 12px -4px rgba(29, 29, 29, 0.08)',
				'glow': '0 0 0 1px rgba(203, 175, 92, 0.1), 0 8px 16px -4px rgba(203, 175, 92, 0.15)',
				'glow-accent': '0 0 0 1px rgba(167, 127, 26, 0.1), 0 8px 16px -4px rgba(167, 127, 26, 0.15)',
			},

			// === ANIMATION SYSTEM ===
			keyframes: {
				// === BASIC ANIMATIONS ===
				'fade-in': {
					'0%': {
						opacity: '0',
						transform: 'translateY(20px)'
					},
					'100%': {
						opacity: '1',
						transform: 'translateY(0)'
					}
				},
				'fade-out': {
					'0%': {
						opacity: '1',
						transform: 'translateY(0)'
					},
					'100%': {
						opacity: '0',
						transform: 'translateY(20px)'
					}
				},
				'slide-in-right': {
					'0%': {
						transform: 'translateX(100%)',
						opacity: '0'
					},
					'100%': {
						transform: 'translateX(0)',
						opacity: '1'
					}
				},
				'slide-in-left': {
					'0%': {
						transform: 'translateX(-100%)',
						opacity: '0'
					},
					'100%': {
						transform: 'translateX(0)',
						opacity: '1'
					}
				},
				'slide-in-up': {
					'0%': {
						transform: 'translateY(100%)',
						opacity: '0'
					},
					'100%': {
						transform: 'translateY(0)',
						opacity: '1'
					}
				},
				'slide-in-down': {
					'0%': {
						transform: 'translateY(-100%)',
						opacity: '0'
					},
					'100%': {
						transform: 'translateY(0)',
						opacity: '1'
					}
				},
				'scale-in': {
					'0%': {
						transform: 'scale(0.95)',
						opacity: '0'
					},
					'100%': {
						transform: 'scale(1)',
						opacity: '1'
					}
				},
				'scale-out': {
					'0%': {
						transform: 'scale(1)',
						opacity: '1'
					},
					'100%': {
						transform: 'scale(0.95)',
						opacity: '0'
					}
				},

				// === FLOATING ANIMATIONS ===
				'float': {
					'0%, 100%': {
						transform: 'translateY(0px) rotate(0deg)'
					},
					'25%': {
						transform: 'translateY(-10px) rotate(1deg)'
					},
					'50%': {
						transform: 'translateY(-5px) rotate(0deg)'
					},
					'75%': {
						transform: 'translateY(-15px) rotate(-1deg)'
					}
				},
				'float-slow': {
					'0%, 100%': {
						transform: 'translateY(0px)'
					},
					'50%': {
						transform: 'translateY(-10px)'
					}
				},

				// === INTERACTIVE ANIMATIONS ===
				'bounce-gentle': {
					'0%, 100%': {
						transform: 'translateY(0)'
					},
					'50%': {
						transform: 'translateY(-5px)'
					}
				},
				'pulse-glow': {
					'0%, 100%': {
						boxShadow: '0 0 0 0 rgba(14, 165, 233, 0.7)'
					},
					'50%': {
						boxShadow: '0 0 0 10px rgba(14, 165, 233, 0)'
					}
				},
				'shake': {
					'0%, 100%': {
						transform: 'translateX(0)'
					},
					'10%, 30%, 50%, 70%, 90%': {
						transform: 'translateX(-2px)'
					},
					'20%, 40%, 60%, 80%': {
						transform: 'translateX(2px)'
					}
				},

				// === RADIX UI ANIMATIONS ===
				'accordion-down': {
					from: {
						height: '0'
					},
					to: {
						height: 'var(--radix-accordion-content-height)'
					}
				},
				'accordion-up': {
					from: {
						height: 'var(--radix-accordion-content-height)'
					},
					to: {
						height: '0'
					}
				},

				// === TYPEWRITER ANIMATION ===
				'modern-blink': {
					'0%, 50%': {
						opacity: '1'
					},
					'51%, 100%': {
						opacity: '0'
					}
				},
			},

			animation: {
				// === BASIC ANIMATIONS ===
				'fade-in': 'fade-in 0.6s ease-out',
				'fade-out': 'fade-out 0.6s ease-out',
				'slide-in-right': 'slide-in-right 0.5s ease-out',
				'slide-in-left': 'slide-in-left 0.5s ease-out',
				'slide-in-up': 'slide-in-up 0.5s ease-out',
				'slide-in-down': 'slide-in-down 0.5s ease-out',
				'scale-in': 'scale-in 0.4s ease-out',
				'scale-out': 'scale-out 0.4s ease-out',

				// === FLOATING ANIMATIONS ===
				'float': 'float 6s ease-in-out infinite',
				'float-slow': 'float-slow 8s ease-in-out infinite',

				// === INTERACTIVE ANIMATIONS ===
				'bounce-gentle': 'bounce-gentle 2s infinite',
				'pulse-glow': 'pulse-glow 2s infinite',
				'shake': 'shake 0.5s ease-in-out',

				// === RADIX UI ANIMATIONS ===
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',

				// === TYPEWRITER ANIMATION ===
				'modern-blink': 'modern-blink 1.2s infinite ease-in-out',
			},

			// === Z-INDEX SYSTEM ===
			zIndex: {
				'1': '1',
				'2': '2',
				'3': '3',
				'4': '4',
				'5': '5',
				'dropdown': '1000',
				'sticky': '1020',
				'fixed': '1030',
				'modal-backdrop': '1040',
				'modal': '1050',
				'popover': '1060',
				'tooltip': '1070',
				'toast': '1080',
			},

			// === BACKDROP BLUR SYSTEM ===
			backdropBlur: {
				'xs': '2px',
				'sm': '4px',
				DEFAULT: '8px',
				'md': '12px',
				'lg': '16px',
				'xl': '24px',
				'2xl': '40px',
				'3xl': '64px',
			},
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
