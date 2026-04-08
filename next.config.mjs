/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // Thêm dòng này để xuất web thành dạng tĩnh (HTML/CSS/JS)
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true, // Giữ nguyên dòng này, nó rất quan trọng cho GitHub Pages
  },
}

export default nextConfig
