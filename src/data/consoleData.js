import {
  Activity,
  DollarSign,
  History,
  ListOrdered,
  Map,
  Search,
  ShieldCheck,
  Users,
} from 'lucide-react'

export const consoleTabs = [
  { id: 'tax-finder', label: 'Tax Code Finder', icon: Search, desc: 'Search international tariff regulations.' },
  { id: 'manifest', label: 'Manifest History', icon: History, desc: 'Track and undo manifest edits.' },
  { id: 'queue', label: 'Inspection Queue', icon: ListOrdered, desc: 'Live chronological arrival list.' },
  { id: 'security', label: 'Security Checker', icon: ShieldCheck, desc: 'Validate Bills of Lading against ledger.' },
  { id: 'sorter', label: 'Tax Cost Sorter', icon: DollarSign, desc: 'Rank items by financial obligations.' },
  { id: 'hub', label: 'Status Hub', icon: Activity, desc: 'Real-time global border traffic.' },
  { id: 'route', label: 'Clearance Route', icon: Map, desc: 'Minimal wait time pathfinding.' },
  { id: 'planner', label: 'Workload Planner', icon: Users, desc: 'Dynamic agent allocation.' },
]

export const taxItems = [
  { hsCode: '8471.30', description: 'Portable digital automatic data processing machines', rate: '0%' },
  { hsCode: '8517.13', description: 'Smartphones for cellular networks', rate: '2.5%' },
  { hsCode: '8703.80', description: 'Electric vehicles for transport', rate: '10%' },
  { hsCode: '9018.90', description: 'Medical, surgical or veterinary instruments', rate: '0%' },
]

export const initialManifestLogs = [
  { id: 1, time: '14:20:05', containerId: 'MSKU-9921', action: 'Weight Adjusted (+50kg)', user: 'Agent_Smith' },
  { id: 2, time: '13:45:12', containerId: 'TCLU-4402', action: 'Destination Changed', user: 'System_Auto' },
  { id: 3, time: '12:10:33', containerId: 'CMAU-1129', action: 'HS Code Updated', user: 'Agent_K' },
]
