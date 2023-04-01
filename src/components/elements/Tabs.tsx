import { Tab } from './Tab'

export type Tab = { id: number; label: string; content: React.ReactNode }

interface TabsProps {
  tabs: Tab[]
  activeTab: Tab
  onTabChange: (tab: Tab) => void
}

export const Tabs = ({ tabs, activeTab, onTabChange }: TabsProps) => {
  return (
    <div className="tabs">
      {tabs.map((tab) => (
        <Tab
          key={tab.id}
          label={tab.label}
          isActive={activeTab.id === tab.id}
          onClick={() => onTabChange(tab)}
        />
      ))}
    </div>
  )
}
