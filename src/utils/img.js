// Wrap image URLs via a proxy to avoid CORS/size issues and provide a stable fallback
export function safeImage(originalUrl) {
	const placeholder = 'https://images.weserv.nl/?url=upload.wikimedia.org/wikipedia/commons/6/6f/Chinese_cuisine_sample.jpg&w=800&h=600&fit=cover'
	if (!originalUrl || typeof originalUrl !== 'string') return placeholder
	try {
		// Avoid double-wrapping if already proxied
		if (originalUrl.startsWith('https://images.weserv.nl/?url=')) return originalUrl
		const url = new URL(originalUrl)
		const target = `${url.host}${url.pathname}${url.search}`
		const encoded = encodeURIComponent(target)
		return `https://images.weserv.nl/?url=${encoded}&w=800&h=600&fit=cover`
	} catch {
		const sanitized = originalUrl.replace(/^https?:\/\//, '')
		return `https://images.weserv.nl/?url=${encodeURIComponent(sanitized)}&w=800&h=600&fit=cover`
	}
}
 