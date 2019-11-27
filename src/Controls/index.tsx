export * from './Button'
export * from './Input'
import { addThemeComponent } from '../theme'

addThemeComponent((theme: { borderRadius: string, palette: { [name: string]: string }, colors: { [name: string]: string } }) => (['controls', {
    borderRadius: theme.borderRadius,
    borderColor: theme.colors.elemBorder,
    placeholderTextColor: theme.colors.textLight,
    backgroundColor: theme.palette.white,
    error: {
        borderColor: theme.colors.negative,
    },
    focus: {
        borderColor: theme.colors.primary,
    }
}]))