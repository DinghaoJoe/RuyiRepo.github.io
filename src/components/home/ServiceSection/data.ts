import type { ServiceData } from '@/types'

const PYPI_URL = 'https://ruyirepo.ruyicommunity.cn/pypi'
const PYPI_EXAMPLE = 'pip install -i https://ruyirepo.ruyicommunity.cn/pypi/simple/ torch'

const PYPI_SOFTWARE_ITEMS = [
  { name: 'cmake', version: '4.2.1' },
  { name: 'cython', version: '3.0.6' },
  { name: 'cryptography', version: '46.0.4' },
  { name: 'ninja', version: '1.13.0' },
  { name: 'numpy', version: '2.4.2' },
  { name: 'onnx', version: '1.20.0' },
  { name: 'pillow', version: '11.0.0' },
  { name: 'torch', version: '2.10.0' },
  { name: 'torch', version: '2.9.0' },
  { name: 'torch', version: '2.8.0' }
]

export const pypiZh: ServiceData = {
  sections: [
    {
      type: 'repoService',
      repoAddress: { label: '仓库地址', url: PYPI_URL },
      usageExample: {
        title: '使用示例',
        code: PYPI_EXAMPLE
      }
    },
    {
      type: 'supportedSoftwareGrid',
      title: '已支持的软件',
      items: PYPI_SOFTWARE_ITEMS
    }
  ]
}

export const pypiEn: ServiceData = {
  sections: [
    {
      type: 'repoService',
      repoAddress: { label: 'Repository Address', url: PYPI_URL },
      usageExample: {
        title: 'Usage Example',
        code: PYPI_EXAMPLE
      }
    },
    {
      type: 'supportedSoftwareGrid',
      title: 'Supported software',
      items: PYPI_SOFTWARE_ITEMS
    }
  ]
}
