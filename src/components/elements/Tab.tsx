interface TabProps {
  label: string
  onClick: () => void
  isActive: boolean
}

export const Tab = ({ label, onClick, isActive }: TabProps) => {
  return (
    <button className={`tab ${isActive ? 'active' : ''}`} onClick={onClick}>
      {label}
    </button>
  )
}
