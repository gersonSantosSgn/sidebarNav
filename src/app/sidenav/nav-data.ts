import { faHome } from '@fortawesome/free-solid-svg-icons';
import { faBoxOpen } from '@fortawesome/free-solid-svg-icons';
import { faChartColumn } from '@fortawesome/free-solid-svg-icons';
import { faTags } from '@fortawesome/free-solid-svg-icons';
import { faFile } from '@fortawesome/free-solid-svg-icons';
import { faCamera } from '@fortawesome/free-solid-svg-icons';
import { faGear } from '@fortawesome/free-solid-svg-icons';

export const navBarData = [
    {
        routerLink: "dashboard",
        icon: faHome,
        label: "Dashboard"
    },
    {
        routerLink: "products",
        icon: faBoxOpen,
        label: "Products"
    },
    {
        routerLink: "statistics",
        icon: faChartColumn,
        label: "Statistics"
    },
    {
        routerLink: "coupens",
        icon: faTags,
        label: "Coupens"
    },
    {
        routerLink: "pages",
        icon: faFile,
        label: "Pages"
    },
    {
        routerLink: "media",
        icon: faCamera,
        label: "Media"
    },
    {
        routerLink: "setings",
        icon: faGear,
        label: "Settings"
    },
]