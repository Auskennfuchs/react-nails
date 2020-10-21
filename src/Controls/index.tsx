export * from './Button'
export * from './Input'
export * from './Dropdown'
import { addThemeComponent } from '../theme'

addThemeComponent((theme: { borderRadius: string, palette: { [name: string]: string }, colors: { [name: string]: string } }) => (['controls', {
    borderRadius: theme.borderRadius,
    borderWidth: "1px",
    borderColor: theme.colors.elemBorder,
    placeholderTextColor: theme.colors.textLight,
    backgroundColor: theme.palette.white,
    textColor: theme.colors.text,
    lineHeight: "1.15em",
    padding: "0.6em 0.4em",
    error: {
        borderColor: theme.colors.negative,
    },
    success: {
        borderColor: theme.colors.positive,
    },
    focus: {
        borderColor: theme.colors.primary,
        borderWidth: "2px",
    },
    disabled: {
        textColor: theme.palette.grey4,
    }
}]))