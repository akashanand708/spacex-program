
import { createMuiTheme } from '@material-ui/core/styles';
import { red } from '@material-ui/core/colors';

const theme = createMuiTheme({
    palette: {
        common: {
            black: '#000',
            white: '#fff',
            green: '#008000'
        },
        primary: {
            light: '#ff4081',
            main: '#00acc1',
            dark: '#018696',
            contrastText: '#fff'
        },
        ascent: {
            light: '',
            main: '#00acc1',
            dark: '',
            contrastText: '',
        },
        secondary: {
            light: '#7986cb',
            main: '#3E3E3E',
            dark: '#3E3E3E',
            contrastText: '#ffffff',
        },
        error: {
            light: '#e57373',
            main: '#f44336',
            dark: '#d32f2f',
            contrastText: '#fff',
        },
        text: {
            primary: '#696969',
            secondary: '#212121',
            disabled: 'rgba(0, 0, 0, 0.38)',
            hint: 'rgba(0, 0, 0, 0.38)',
            divider: 'rgba(0, 0, 0, 0.12)',
            normal: '#999999'
        },
        background: {
            paper: '#fff',
            default: '#fafafa'
        },
        action: {
            active: 'rgba(0, 0, 0, 0.54)',
            hover: 'rgba(0, 0, 0, 0.08)',
            hoverOpacity: 0.08,
            selected: 'rgba(0, 0, 0, 0.14)',
            disabled: 'rgba(0, 0, 0, 0.26)',
            disabledBackground: 'rgba(0, 0, 0, 0.12)',
        }
    },
    fab: {
        color: '#d81b60'
    },
    status: {
        danger: red[500],
    },
    icon: {
        color: 'rgba(0,0,0,0.4)'
    },
    typography: {
        useNextVariants: true,
        htmlFontSize: 16,
        fontFamily: [
            '"Segoe UI"',
            'Roboto',
            '"Helvetica Neue"',
            'Arial',
            'sans-serif',
            '"Apple Color Emoji"',
            '"Segoe UI Emoji"',
            '"Segoe UI Symbol"',
        ].join(',')
    },
});

export default theme;
