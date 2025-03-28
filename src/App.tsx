import { useState } from 'react'
import {
  Box,
  Button,
  Container,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Text,
  VStack,
  Alert,
  AlertIcon,
  Code,
} from '@chakra-ui/react'
import { ethers } from 'ethers'

export default function App() {
  // 私钥输入框的状态值
  const [privateKey, setPrivateKey] = useState<string>('')

  // 用户输入的目标地址（用于验证）
  const [targetAddress, setTargetAddress] = useState<string>('')

  // 根据私钥生成的钱包地址
  const [derivedAddress, setDerivedAddress] = useState<string>('')

  // 是否匹配目标地址（null = 未检查）
  const [isMatch, setIsMatch] = useState<boolean | null>(null)

  // 错误信息（私钥格式不合法时）
  const [error, setError] = useState<string>('')

  // 核心逻辑：验证私钥是否合法，并与目标地址比对
  const handleCheck = () => {
    try {
      // 使用 ethers.js 创建钱包对象
      const wallet = new ethers.Wallet(privateKey.trim())

      // 获取该私钥对应的钱包地址
      const address = wallet.address
      setDerivedAddress(address)

      // 如果用户输入了目标地址，进行匹配对比（忽略大小写）
      if (targetAddress.trim()) {
        const match =
          address.toLowerCase() === targetAddress.trim().toLowerCase()
        setIsMatch(match)
      } else {
        // 如果未输入目标地址，跳过比对
        setIsMatch(null)
      }

      // 清除之前可能存在的错误提示
      setError('')
    } catch (e: any) {
      // 如果私钥格式错误，显示错误提示
      setError('私钥格式不正确，请检查输入。')
      setDerivedAddress('')
      setIsMatch(null)
    }
  }

  return (
    <Container maxW="md" py={10}>
      <VStack spacing={6} align="stretch">
        <Heading size="lg" textAlign="center">
          🧪 钱包私钥验证工具
        </Heading>

        {/* 私钥输入框 */}
        <FormControl>
          <FormLabel>输入私钥</FormLabel>
          <Input
            value={privateKey}
            onChange={(e) => setPrivateKey(e.target.value)}
            placeholder="0x 开头的私钥"
          />
        </FormControl>

        {/* 目标地址输入框（可选） */}
        <FormControl>
          <FormLabel>目标钱包地址（可选）</FormLabel>
          <Input
            value={targetAddress}
            onChange={(e) => setTargetAddress(e.target.value)}
            placeholder="0x 开头的钱包地址"
          />
        </FormControl>

        {/* 提交按钮 */}
        <Button colorScheme="blue" onClick={handleCheck}>
          生成地址并检查
        </Button>

        {/* 错误信息展示 */}
        {error && (
          <Alert status="error" rounded="md">
            <AlertIcon />
            {error}
          </Alert>
        )}

        {/* 派生地址展示 */}
        {derivedAddress && (
          <Box
            p={4}
            bg="gray.50"
            borderRadius="md"
            border="1px solid #e2e8f0"
          >
            <Text fontSize="sm">派生地址：</Text>
            <Code colorScheme="blue" wordBreak="break-all">
              {derivedAddress}
            </Code>
          </Box>
        )}

        {/* 匹配验证结果展示 */}
        {isMatch !== null && (
          <Alert
            status={isMatch ? 'success' : 'error'}
            rounded="md"
          >
            <AlertIcon />
            {isMatch ? '✅ 地址匹配！' : '❌ 地址不匹配'}
          </Alert>
        )}
      </VStack>
    </Container>
  )
}