import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
	remotePatterns: [
		{
			protocol: 'https',
			hostname: 'solar.hostdns.net.in',
			port: '1500',
			pathname: 'mancgi/fmimage_pro/**',
			search: '?elid=',
		},
	],
};

export default nextConfig;
