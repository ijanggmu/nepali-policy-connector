
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
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				sidebar: {
					DEFAULT: 'hsl(var(--sidebar-background))',
					foreground: 'hsl(var(--sidebar-foreground))',
					primary: 'hsl(var(--sidebar-primary))',
					'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
					accent: 'hsl(var(--sidebar-accent))',
					'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
					border: 'hsl(var(--sidebar-border))',
					ring: 'hsl(var(--sidebar-ring))'
				},
				// Nepali-themed colors
				nepali: {
					red: '#C8102E', // From Nepal flag
					blue: '#003893', // From Nepal flag
					50: '#FEF2F4',
					100: '#FDE6EA',
					200: '#F9BFCB',
					300: '#F597AC',
					400: '#F06E8D',
					500: '#EB456E',
					600: '#D92752',
					700: '#B31D41',
					800: '#8E1733',
					900: '#691124',
				},
				slate: {
					50: '#f8fafc',
					100: '#f1f5f9',
					200: '#e2e8f0',
					300: '#cbd5e1',
					400: '#94a3b8',
					500: '#64748b',
					600: '#475569',
					700: '#334155',
					800: '#1e293b',
					900: '#0f172a',
					950: '#020617',
				},
			},
			fontFamily: {
				'mukta': ['Mukta', 'sans-serif'],
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			keyframes: {
				'accordion-down': {
					from: { height: '0' },
					to: { height: 'var(--radix-accordion-content-height)' }
				},
				'accordion-up': {
					from: { height: 'var(--radix-accordion-content-height)' },
					to: { height: '0' }
				},
				'fade-in': {
					from: { opacity: '0' },
					to: { opacity: '1' }
				},
				'fade-up': {
					from: { 
						opacity: '0',
						transform: 'translateY(10px)'
					},
					to: { 
						opacity: '1',
						transform: 'translateY(0)'
					}
				},
				'scale-in': {
					from: { 
						opacity: '0',
						transform: 'scale(0.95)'
					},
					to: { 
						opacity: '1',
						transform: 'scale(1)'
					}
				},
				'float': {
					'0%, 100%': { 
						transform: 'translateY(0)'
					},
					'50%': { 
						transform: 'translateY(-10px)'
					}
				},
				'pulse-slow': {
					'0%, 100%': { 
						opacity: '1'
					},
					'50%': { 
						opacity: '0.8'
					}
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'fade-in': 'fade-in 0.5s ease-out',
				'fade-up': 'fade-up 0.5s ease-out',
				'scale-in': 'scale-in 0.3s ease-out',
				'float': 'float 6s ease-in-out infinite',
				'pulse-slow': 'pulse-slow 3s ease-in-out infinite'
			},
			transitionTimingFunction: {
				'expo-out': 'cubic-bezier(0.16, 1, 0.3, 1)',
				'spring': 'cubic-bezier(0.175, 0.885, 0.32, 1.275)'
			},
			boxShadow: {
				'soft': '0 2px 15px rgba(0, 0, 0, 0.05)',
				'medium': '0 4px 20px rgba(0, 0, 0, 0.08)',
				'glass': '0 8px 32px rgba(0, 0, 0, 0.06)'
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
