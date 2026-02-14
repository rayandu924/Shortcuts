export interface ShortcutIcon {
  id: string
  name: string
  execPath: string
  iconData: string // base64 data URL or empty string for default
  col: number
  row: number
}

export interface Settings extends Record<string, unknown> {
  iconsData: string
  iconSize: number
  gridSpacing: number
  showLabels: boolean
  labelColor: string
}
