import axios from 'axios'

const owner = 'omnisat'
const repo = 'lasereyes'
const branch = 'main'

export const getPackageVersion = async () => {
  try {
    const response = await axios.get(
      `https://raw.githubusercontent.com/${owner}/${repo}/${branch}/package.json`
    )
    const packageJson = response.data
    return packageJson.version
  } catch (error) {
    console.error('Error fetching package.json:', error)
    return null
  }
}