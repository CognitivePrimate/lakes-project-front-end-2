const size = {
    mobileS: '320px',
    mobileM: '375px',
    mobileL: '425px',
    tablet: '768px',
    desktopS: '1024px',
    desktopM: '1440px',
    desktopL: '2560px'
}

const device = {
    mobileS: `(min-width: ${size.mobileS})`,
    mobileM: `(min-width: ${size.mobileM})`,
    mobileL: `(min-width: ${size.mobileL})`,
    tablet: `(min-width: ${size.tablet})`,
    desktopS: `(min-width: ${size.desktopS})`,
    desktopM: `(min-width: ${size.desktopM})`,
    desktopL: `(min-width: ${size.desktopL})`
};

export default device;