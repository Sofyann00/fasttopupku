import { NextResponse } from 'next/server'
import crypto from 'crypto'

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url)
    const depositId = searchParams.get('depositId')

    if (!depositId) {
      return NextResponse.json(
        { message: 'Deposit ID is required' },
        { status: 400 }
      )
    }

    // Generate timestamp in required format
    const timestamp = new Date().toISOString()
    
    // Your client ID from Rampable
    const clientId = 'c6b8b9a971374978ab2a5afa313bd5835621713'
    
    // Generate signature string
    const stringToSign = `${clientId}:${timestamp}`
    
    // Private key for signing
    const privateKey = `-----BEGIN PRIVATE KEY-----
MIIEvgIBADANBgkqhkiG9w0BAQEFAASCBKgwggSkAgEAAoIBAQCx9iKpb7JxP3bF
PLQvFDXw42D75XdvJ9+r37UALjXXzXELcxkZ7p/4YXNsnNoqqHboV1HyHnYo7nR7
wi5ReYzpACHZoXxxge2eew79lLhr+d5WQBA7SHEAsadwpctZX0TFnEbFf0wL5Ln+
LN7IQdFo192Na62Cpz6tORYe3sg47YqOr3nU3wCJt6YHbS9/xCXAtj6KQYYy7Beq
5vxVrff8Mptuzf+WuN4i47Iu+8N9FPztv8TEXj2cXI4tRBZRPq3G62Tyv54J0712
XBteqoAdtAL/IK1MzuoRO+8N5QEoVjsU3XM7xVzVBBnOgiHK2162uYIour+pLIph
DpfQ3bhHAgMBAAECggEAPubVfJcu9ulsNS4OMB/QKxtrkc2bSA5LeGhDhVNQE72Z
aeceZbSbFYN4dVkBohdWpCwNGmva7v/N61qI3aJ9hHPYAyEZp9M5Zo1vkIELKJsy
k8DkG9gwnQKuQNpRRH8wgzqIJ1Gl0wRfG3DHs/fTqV+3fz+ini44MKkfYPz0v23b
cva6QYAnSiZaUIIT4k851bU+i4spSzAsYWYpM99x1eGhqY3kCAZjXG54hW/t3tCN
eT3fiHP9q1vgSRzjFam4XST5u/5tkmZ67PIggb09dQrhVnrK5iHK2OdweI3IzsRT
8a2k+jjm1LmkG5X4XS7xyIGxoBzcUPb5l/04BEY9UQKBgQDm7YhFdxRyvTHpUMiN
xZz3jUVGUzIXiyLnw2TbwCMff2mnSfxJYzIAerCb2ul69w04YGIufEP52n1knHVM
j1baerQ02g3J93iSjfHmr0Xi8/SNrxXwmGMeFhgAbU5R/iPHAckZ49zWEhkQ/rs6
JqmWqa4v44ONOdBS6CQoXDeAcQKBgQDFSHEQaeYmy+yPScm+VyiyzUPHE9Cq65pm
ea3Z2tgSC4ZvU30XGznHMnLmA0I3HtVSDQ4Yy4UdHLxcJHl9xHuSN7Hl+wq93abF
qU4oa2hbsQY16ZEDTUmQug+h0fgMbU4fr58aYSpJgfVUpM7sVibRnzt4iE2h0uyu
CwoTUJMgNwKBgQDNBpN4aTMkc8l+hpSpGow0VZ7twyu0L3n8H0TKvhnw+ySIvG1b
ktBwEH4AwimNXQ7FwP0qnHWVvWCbFTYnlRPdwheA3SBk8myAYbolv/PifgngSVTH
WeSWb7M7ndBth5+oLnOnouEMxuCucBs2k+D5vQjDx9Gib3QAR87ibo1wYQKBgQCm
anRNpzco1O5o9JKEyFshcPtSjEmCVJn7BXt8gRmxJx2w/RlRC3tSqCC6HFeXzZ+e
xjp0+gEAzMOram09hSfD8M1VNc4a2UWcCTRP7kKqzgpyIeNciK6csgcLtuXp/a5g
FjI8+2fDeCftzdRrEkVOoGZ3R2tNLXLPYaqPHnHtQwKBgASVA9iZY0DvoJkeMVrN
2FMFvCjyBaJ6X+9LU7ZJfqKLRWJEcXHdi010tcmQTpn0gq4uV5uJFpq2RbdIdNXW
CecGNWPAMKhBZBoxF4cgPdivMx4zgJI6knbx+wAhh8f8ianC2zj4cveZel8tBxkC
G1swLyTBM0H/5lin/n6oSk4k
-----END PRIVATE KEY-----`
    
    const sign = crypto.createSign('SHA256')
    sign.update(stringToSign)
    const signature = sign.sign(privateKey, 'base64')

    const response = await fetch(`https://api.mayaramp.com/v1/deposit/${depositId}`, {
      headers: {
        'X-Bypass-Secret': 'YZKNsyPLlvQJ5FwRNPrnLo0UsQZzEOgm',
        'X-SIGNATURE': signature,
        'X-TIMESTAMP': timestamp,
        'X-CLIENT-ID': clientId
      }
    })

    const data = await response.json()

    if (!response.ok) {
      return NextResponse.json(
        { message: data.message || 'Failed to check payment status' },
        { status: response.status }
      )
    }

    return NextResponse.json(data)
  } catch (error) {
    return NextResponse.json(
      { message: 'Internal server error' },
      { status: 500 }
    )
  }
} 