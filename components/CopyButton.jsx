import { useState } from 'react'

export default function CopyButton({ text }) {
    const [copied, setCopied] = useState(false)

    const handleCopy = async () => {
        await navigator.clipboard.writeText(text)
        setCopied(true)
        setTimeout(() => setCopied(false), 2000)
    }

    return (
        <button
            onClick={handleCopy}
            style={{
                display: 'flex',
                alignItems: 'center',
                gap: '6px',
                padding: '8px 12px',
                fontSize: '13px',
                fontWeight: '500',
                backgroundColor: 'transparent',
                color: copied ? '#22c55e' : 'inherit',
                border: '1px solid rgba(128,128,128,0.2)',
                borderRadius: '6px',
                cursor: 'pointer',
                transition: 'all 0.2s',
                opacity: copied ? 1 : 0.7,
                width: '100%',
                justifyContent: 'center',
            }}
            onMouseEnter={(e) => e.target.style.opacity = 1}
            onMouseLeave={(e) => e.target.style.opacity = copied ? 1 : 0.7}
        >
            {copied ? '✓ Скопировано' : '📋 Скопировать промт'}
        </button>
    )
}
