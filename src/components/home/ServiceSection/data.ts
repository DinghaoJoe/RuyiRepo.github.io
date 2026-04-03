import type { ServiceData } from '@/types'

const PYPI_URL = 'https://ruyirepo.ruyicommunity.cn/pypi'
const PYPI_EXAMPLE = 'pip install -i https://ruyirepo.ruyicommunity.cn/pypi/simple/ torch'

/** 可按仓库实际索引更新 ABI 列表 */
const PYPI_SOFTWARE_ITEMS = [
  { name: 'cmake', version: '4.2.1', abi: ['cp310', 'cp311', 'cp312', 'cp313', 'cp314'] },
  { name: 'cython', version: '3.0.6', abi: ['cp310', 'cp311', 'cp312', 'cp313'] },
  { name: 'cryptography', version: '46.0.4', abi: ['cp310', 'cp311', 'cp312', 'cp313'] },
  { name: 'ninja', version: '1.13.0', abi: ['cp310', 'cp311', 'cp312', 'cp313', 'cp314'] },
  { name: 'numpy', version: '2.4.2', abi: ['cp310', 'cp311', 'cp312', 'cp313'] },
  { name: 'onnx', version: '1.20.0', abi: ['cp310', 'cp311'] },
  { name: 'pillow', version: '11.0.0', abi: ['cp310', 'cp311', 'cp312', 'cp313'] },
  { name: 'torch', version: '2.10.0', abi: ['cp310', 'cp311', 'cp312'] },
  { name: 'torch', version: '2.9.0', abi: ['cp310', 'cp311', 'cp312'] },
  { name: 'torch', version: '2.8.0', abi: ['cp310', 'cp311'] }
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
      columns: { package: '软件包', version: '版本', abi: 'ABI' },
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
      columns: { package: 'Package', version: 'Version', abi: 'ABI' },
      items: PYPI_SOFTWARE_ITEMS
    }
  ]
}
