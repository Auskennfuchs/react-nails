export * from './Button'
import { addThemeComponent } from '../theme'

addThemeComponent((theme: { borderRadius: string }) => (['controls', {
    borderRadius: theme.borderRadius,
}]))