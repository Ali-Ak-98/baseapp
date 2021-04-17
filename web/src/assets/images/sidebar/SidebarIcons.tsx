import * as React from 'react';

interface SidebarIconsProps {
    name: string;
    className?: string;
}

export const SidebarIcons: React.FC<SidebarIconsProps> = (props: SidebarIconsProps) => {
    switch (props.name) {
        case 'history':
            return (
                <svg width="20" height="20" className={props.className} viewBox="0 0 20 20" fill="none">
                    <path
                        d="M10 0C9.67613 0 9.41406 0.26207 9.41406 0.585938C9.41406 0.909805 9.67613 1.17188 10 1.17188C14.8466 1.17188 18.8281 5.15344 18.8281 10C18.8281 14.8466 14.8466 18.8281 10 18.8281C5.15344 18.8281 1.17188 14.8466 1.17188 10C1.17188 7.64387 2.20316 5.38668 3.86719 3.7441V4.72656C3.86719 5.05043 4.12926 5.3125 4.45312 5.3125C4.77699 5.3125 5.03906 5.05043 5.03906 4.72656V2.38281C5.03906 2.05895 4.75746 1.79688 4.43359 1.79688H2.08984C1.76598 1.79688 1.50391 2.05895 1.50391 2.38281C1.50391 2.70668 1.76598 2.96484 2.08984 2.96484H2.97117C1.12082 4.82109 0 7.35664 0 10C0 15.4926 4.50742 20 10 20C15.4926 20 20 15.4926 20 10C20 4.50742 15.4926 0 10 0Z"
                        fill="var(--icons)"/>
                    <path
                        d="M15.8594 10.5859C15.5355 10.5859 15.2734 10.3239 15.2734 10C15.2734 9.67613 15.5355 9.41406 15.8594 9.41406H16.4156C16.2943 8.07645 15.7648 6.85559 14.95 5.87863L14.5575 6.27109C14.3285 6.50012 13.9579 6.50012 13.7289 6.27109C13.4999 6.04207 13.4999 5.67148 13.7289 5.44246L14.1214 5.05C13.1444 4.2352 11.9235 3.70566 10.5859 3.58438V4.14062C10.5859 4.46449 10.3239 4.72656 10 4.72656C9.67613 4.72656 9.41406 4.46449 9.41406 4.14062V3.58438C8.07645 3.70566 6.85559 4.2352 5.87863 5.05L6.27109 5.44246C6.50012 5.67148 6.50012 6.04207 6.27109 6.27109C6.04215 6.50012 5.67148 6.50012 5.44246 6.27109L5.05 5.87863C4.2352 6.85559 3.70566 8.07648 3.58438 9.41406H4.14062C4.46449 9.41406 4.72656 9.67613 4.72656 10C4.72656 10.3239 4.46449 10.5859 4.14062 10.5859H3.58438C3.70566 11.9236 4.2352 13.1443 5.05 14.1213L5.44246 13.7288C5.67148 13.4999 6.04215 13.4999 6.27109 13.7288C6.50012 13.9579 6.50012 14.3285 6.27109 14.5575L5.87863 14.95C6.85559 15.7648 8.07648 16.2943 9.41406 16.4156V15.8594C9.41406 15.5355 9.67613 15.2734 10 15.2734C10.3239 15.2734 10.5859 15.5355 10.5859 15.8594V16.4156C11.9236 16.2943 13.1444 15.7648 14.1214 14.95L13.7289 14.5575C13.4999 14.3285 13.4999 13.9579 13.7289 13.7288C13.9579 13.4999 14.3285 13.4999 14.5575 13.7288L14.95 14.1213C15.7648 13.1443 16.2943 11.9235 16.4156 10.5859H15.8594ZM11.5861 11.5861C11.3572 11.815 10.9865 11.815 10.7576 11.5861L9.5857 10.4143C9.47586 10.3044 9.41406 10.1556 9.41406 10V7.65625C9.41406 7.33238 9.67613 7.07031 10 7.07031C10.3239 7.07031 10.5859 7.33238 10.5859 7.65625V9.75738L11.5861 10.7576C11.815 10.9864 11.815 11.3573 11.5861 11.5861Z"
                        fill="var(--icons)"/>
                </svg>
            );
        case 'orders':
            return (
                <svg width="21" height="19" className={props.className} viewBox="0 0 21 19" fill="none">
                    <path d="M6.84 17.355H13.32V18.075H6.84V17.355Z" fill="var(--icons)"/>
                    <path d="M8.59781 14.475L8.32781 16.635H11.8322L11.5622 14.475H8.59781Z" fill="var(--icons)"/>
                    <path
                        d="M3.96 4.39495H6.12V3.46401L5.65453 3.92948C5.51391 4.06993 5.28609 4.06993 5.14547 3.92948L4.42547 3.20948L4.93453 2.70042L5.4 3.16589L6.12 2.44589V2.23495H3.96V4.39495Z"
                        fill="var(--icons)"/>
                    <path
                        d="M20.16 1.15495C20.16 0.558525 19.6764 0.0749512 19.08 0.0749512H1.08C0.483574 0.0749512 0 0.558525 0 1.15495V10.875H20.16V1.15495ZM9.36 2.23495H13.68V2.95495H9.36V2.23495ZM9.36 6.55495H10.8V7.27495H9.36V6.55495ZM6.84 7.06401V9.07495C6.84 9.27376 6.67881 9.43495 6.48 9.43495H3.6C3.40119 9.43495 3.24 9.27376 3.24 9.07495V6.19495C3.24 5.99614 3.40119 5.83495 3.6 5.83495H6.48C6.63012 5.83548 6.76389 5.92987 6.81486 6.07103L7.30547 5.58042L7.81453 6.08948L6.84 7.06401ZM6.84 2.74401V4.75495C6.84 4.95376 6.67881 5.11495 6.48 5.11495H3.6C3.40119 5.11495 3.24 4.95376 3.24 4.75495V1.87495C3.24 1.67614 3.40119 1.51495 3.6 1.51495H6.48C6.63012 1.51548 6.76389 1.60987 6.81486 1.75103L7.30547 1.26042L7.81453 1.76948L6.84 2.74401ZM15.84 9.43495H9.36V8.71495H15.84V9.43495ZM15.84 7.27495H11.52V6.55495H15.84V7.27495ZM15.84 5.11495H9.36V4.39495H15.84V5.11495Z"
                        fill="var(--icons)"/>
                    <path
                        d="M3.96 8.71495H6.12V7.78401L5.65453 8.24948C5.51391 8.38993 5.28609 8.38993 5.14547 8.24948L4.42547 7.52948L4.93453 7.02042L5.4 7.48589L6.12 6.76589V6.55495H3.96V8.71495Z"
                        fill="var(--icons)"/>
                    <path
                        d="M20.16 11.595H0V12.675C0 13.2714 0.483574 13.755 1.08 13.755H19.08C19.6764 13.755 20.16 13.2714 20.16 12.675V11.595ZM18.6156 12.9305C18.5465 12.9963 18.4553 13.0335 18.36 13.035C18.3359 13.0344 18.3118 13.032 18.2879 13.0277C18.2654 13.0239 18.2436 13.0165 18.2232 13.0061C18.2002 12.9982 18.1784 12.9873 18.1584 12.9738C18.1396 12.9604 18.1215 12.946 18.1044 12.9305C17.9652 12.7885 17.9652 12.5614 18.1044 12.4194C18.2087 12.3186 18.3626 12.2891 18.4968 12.3438C18.5404 12.3621 18.5806 12.3875 18.6156 12.4194C18.7548 12.5614 18.7548 12.7885 18.6156 12.9305Z"
                        fill="var(--icons)"/>
                </svg>
            );
        case 'wallets':
            return (
                <svg width="19" height="18" viewBox="0 0 19 18" className={props.className} fill="none">
                    <path
                        d="M12.2041 1.24644C12.2543 1.20963 12.3053 1.20182 12.3395 1.20182C12.3749 1.20182 12.4637 1.21136 12.526 1.29633L14.262 3.6643H15.771L13.5077 0.576756C13.0537 -0.0422565 12.1057 -0.189769 11.4842 0.26539L10.6653 0.865545L11.3849 1.8472L12.2041 1.24644Z"
                        fill="var(--icons)"/>
                    <path
                        d="M8.01857 1.24697C8.06876 1.21015 8.12011 1.20178 8.15429 1.20178C8.18964 1.20178 8.27844 1.21132 8.34079 1.29629L10.0768 3.66427H11.5858L9.32245 0.576718C8.86815 -0.0422941 7.92098 -0.189807 7.299 0.265353L2.6609 3.66427H4.71973L8.01857 1.24697Z"
                        fill="var(--icons)"/>
                    <path
                        d="M9.82043 11.4406C9.82043 9.95096 11.0323 8.73878 12.5219 8.73878H17.0937V5.99472C17.0937 5.38036 16.5952 4.88114 15.9804 4.88114H1.11328C0.49847 4.8811 0 5.38029 0 5.99468V16.8864C0 17.5015 0.49847 18 1.11328 18H15.9804C16.5952 18 17.0937 17.5015 17.0937 16.8864V14.1423H12.5219C11.0323 14.1424 9.82043 12.9302 9.82043 11.4406Z"
                        fill="var(--icons)"/>
                    <path
                        d="M17.6953 9.65147H12.5219C11.5341 9.65147 10.7331 10.4525 10.7331 11.4406C10.7331 12.4289 11.5341 13.2297 12.5219 13.2297H17.6954C18.0217 13.2297 18.2863 12.9647 18.2863 12.6391V10.2426C18.2863 9.91644 18.0216 9.65147 17.6953 9.65147Z"
                        fill="var(--icons)"/>
                </svg>
            );
        case 'trade':
            return (
                <svg width="18" height="18" viewBox="0 0 18 18" className={props.className} fill="none">
                    <path d="M18 16.9453H0V18H18V16.9453Z" fill="var(--icons)"/>
                    <path d="M13.2363 3.5332H9.52734V15.8906H13.2363V3.5332Z" fill="var(--icons)"/>
                    <path d="M18 0H14.291V15.8906H18V0Z" fill="var(--icons)"/>
                    <path d="M8.47266 7.06641H4.76367V15.8906H8.47266V7.06641Z" fill="var(--icons)"/>
                    <path d="M3.70898 10.5996H0V15.8906H3.70898V10.5996Z" fill="var(--icons)"/>
                </svg>
            );
        case 'logout':
            return (
                <svg width="24" height="24" viewBox="0 0 24 24" className={props.className} fill="none">
                    <path
                        d="M11.9668 20.3057H4.49168C4.0332 20.3057 3.66113 19.9336 3.66113 19.4751V4.52492C3.66113 4.06645 4.03324 3.69438 4.49168 3.69438H11.9668C12.4261 3.69438 12.7973 3.32313 12.7973 2.86383C12.7973 2.40453 12.4261 2.0332 11.9668 2.0332H4.49168C3.11793 2.0332 2 3.15117 2 4.52492V19.4751C2 20.8488 3.11793 21.9668 4.49168 21.9668H11.9668C12.4261 21.9668 12.7973 21.5955 12.7973 21.1362C12.7973 20.6769 12.4261 20.3057 11.9668 20.3057Z"
                        fill="var(--icons)"/>
                    <path
                        d="M21.7525 11.4085L16.7026 6.42515C16.3771 6.10288 15.8505 6.10706 15.5282 6.43347C15.206 6.75988 15.2093 7.28562 15.5366 7.60788L19.1453 11.1693H9.47508C9.01578 11.1693 8.64453 11.5406 8.64453 11.9999C8.64453 12.4592 9.01578 12.8305 9.47508 12.8305H19.1453L15.5366 16.3919C15.2093 16.7142 15.2068 17.2399 15.5282 17.5663C15.691 17.7308 15.9053 17.8138 16.1196 17.8138C16.3306 17.8138 16.5415 17.7341 16.7026 17.5746L21.7525 12.5912C21.9103 12.4351 22 12.2224 22 11.9998C22 11.7773 21.9111 11.5655 21.7525 11.4085Z"
                        fill="var(--icons)"/>
                </svg>
            );
        case 'signin':
            return (
                <svg width="24" height="24" viewBox="0 0 24 24" className={props.className} fill="none">
                    <path
                        d="M12.1909 20.4697C9.31592 20.4697 6.77442 18.9977 5.29092 16.7897C5.32542 14.4897 9.89092 13.2247 12.1909 13.2247C14.4909 13.2247 19.0564 14.4897 19.0909 16.7897C17.6074 18.9977 15.0659 20.4697 12.1909 20.4697ZM12.1909 4.1397C13.1059 4.1397 13.9834 4.50318 14.6304 5.15018C15.2774 5.79718 15.6409 6.6747 15.6409 7.5897C15.6409 8.50469 15.2774 9.38222 14.6304 10.0292C13.9834 10.6762 13.1059 11.0397 12.1909 11.0397C11.2759 11.0397 10.3984 10.6762 9.7514 10.0292C9.1044 9.38222 8.74092 8.50469 8.74092 7.5897C8.74092 6.6747 9.1044 5.79718 9.7514 5.15018C10.3984 4.50318 11.2759 4.1397 12.1909 4.1397ZM12.1909 0.689697C10.6807 0.689697 9.1853 0.987154 7.79006 1.56508C6.39481 2.14301 5.12706 2.9901 4.05919 4.05797C1.90252 6.21464 0.690918 9.13971 0.690918 12.1897C0.690918 15.2397 1.90252 18.1648 4.05919 20.3214C5.12706 21.3893 6.39481 22.2364 7.79006 22.8143C9.1853 23.3922 10.6807 23.6897 12.1909 23.6897C15.2409 23.6897 18.166 22.4781 20.3226 20.3214C22.4793 18.1648 23.6909 15.2397 23.6909 12.1897C23.6909 5.8302 18.5159 0.689697 12.1909 0.689697Z"
                        fill="var(--icons)"/>
                </svg>
            );
        case 'signup':
            return (
                <svg width="24" height="21" viewBox="0 0 24 21" className={props.className} fill="none">
                    <path fillRule="evenodd" clipRule="evenodd"
                          d="M15.9005 10.6591C15.229 10.1907 14.5115 9.80893 13.761 9.5173C14.7593 8.60992 15.4216 7.33884 15.5368 5.91586C15.5368 5.91586 15.5637 5.31531 15.4498 4.58983C15.336 3.86436 15.1618 3.43362 15.1618 3.43362C14.3524 1.42298 12.382 0 10.0852 0C7.06913 0 4.61517 2.45375 4.61517 5.46982C4.61517 7.06124 5.29837 8.49574 6.38655 9.49614C3.47712 10.5862 1.11807 12.9275 0.157685 15.9134C-0.160766 16.9035 0.00788724 17.9535 0.620487 18.7943C1.23309 19.6348 2.1809 20.1169 3.22089 20.1169H12.5522C13.1444 20.1169 13.6246 19.6367 13.6246 19.0442C13.6246 18.452 13.1444 17.9718 12.5522 17.9718H3.22089C2.87416 17.9718 2.55822 17.8111 2.35395 17.5308C2.14968 17.2504 2.09353 16.9003 2.19955 16.5702C3.25965 13.2742 6.49277 10.9723 10.0617 10.9723C11.7223 10.9723 13.3171 11.4724 14.6734 12.4184C15.1593 12.7573 15.8278 12.6381 16.1668 12.1523C16.5056 11.6664 16.3866 10.9979 15.9005 10.6591ZM13.4101 5.46982C13.4101 3.63663 11.9186 2.14494 10.0852 2.14494C8.2518 2.14494 6.76031 3.63663 6.76031 5.46982C6.76031 7.30322 8.2518 8.79471 10.0852 8.79471C11.9186 8.79471 13.4101 7.30322 13.4101 5.46982Z"
                          fill="var(--icons)"/>
                    <path fillRule="evenodd" clipRule="evenodd"
                          d="M22.9273 16.3563C23.5198 16.3563 24 15.8761 24 15.2838C24 14.6913 23.5198 14.2112 22.9273 14.2112H19.9779V11.2617C19.9779 10.6694 19.4977 10.1892 18.9054 10.1892C18.3129 10.1892 17.8327 10.6694 17.8327 11.2617V14.2112H14.8833C14.291 14.2112 13.8108 14.6913 13.8108 15.2838C13.8108 15.8761 14.291 16.3563 14.8833 16.3563H17.8327V19.3057C17.8327 19.8982 18.3129 20.3784 18.9054 20.3784C19.4977 20.3784 19.9779 19.8982 19.9779 19.3057V16.3563H22.9273Z"
                          fill="var(--icons)"/>
                </svg>
            );
        case 'api':
            return (
                <svg width="20" height="20" viewBox="0 0 75 75" className="fill-stroke" fill="none"
                     xmlns="http://www.w3.org/2000/svg">
                    <path d="M21.875 51.5625L6.25 37.5L21.875 23.4375" stroke="var(--icons)" strokeWidth="3"
                          strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M53.125 51.5625L68.75 37.5L53.125 23.4375" stroke="var(--icons)" strokeWidth="3"
                          strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M42.6682 19.4763L32.3318 55.5236" stroke="var(--icons)" strokeWidth="3"
                          strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
            );
        case 'internal_transfer':
            return (
                <svg width="24" height="24" className={props.className} viewBox="0 0 24 24" fill="none"
                     xmlns="http://www.w3.org/2000/svg">
                    <g clipPath="url(#clip0)">
                        <path
                            d="M9.92725 17.033V20.7047C9.92725 20.9612 10.0919 21.1884 10.3357 21.2692C10.3967 21.289 10.4592 21.2985 10.521 21.2985C10.7062 21.2985 10.8852 21.2114 10.9992 21.0562L13.1469 18.1334L9.92725 17.033Z"
                            fill="var(--icons)"/>
                        <path
                            d="M21.7507 3.20031C21.5686 3.07126 21.3295 3.05385 21.1316 3.15756L3.31908 12.4596C3.10849 12.5697 2.9842 12.7945 3.00162 13.0312C3.01983 13.2687 3.17737 13.4714 3.40141 13.5482L8.35329 15.2408L18.8991 6.22368L10.7386 16.0554L19.0376 18.8919C19.0994 18.9125 19.1643 18.9236 19.2292 18.9236C19.3369 18.9236 19.4437 18.8943 19.538 18.8373C19.6884 18.7455 19.7905 18.5911 19.8166 18.4177L21.9937 3.77189C22.0262 3.55022 21.9327 3.33014 21.7507 3.20031Z"
                            fill="var(--icons)"/>
                    </g>
                    <defs>
                        <clipPath id="clip0">
                            <rect width="19" height="19" fill="white" transform="translate(3 3.09023)"/>
                        </clipPath>
                    </defs>
                </svg>
            );
        case 'riyal':
            return (
                <svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 220 220"
                     className={props.className}>
                    <g>
                        <path d="M110,0C49.346,0,0,49.346,0,110s49.346,110,110,110s110-49.346,110-110S170.654,0,110,0z M110,210
		c-55.14,0-100-44.86-100-100S54.86,10,110,10s100,44.86,100,100S165.14,210,110,210z"/>
                        <path d="M110,19.5c-49.902,0-90.5,40.598-90.5,90.5s40.598,90.5,90.5,90.5s90.5-40.598,90.5-90.5S159.902,19.5,110,19.5z
		 M110,197.5c-48.248,0-87.5-39.252-87.5-87.5S61.752,22.5,110,22.5s87.5,39.252,87.5,87.5S158.248,197.5,110,197.5z"/>
                        <path d="M81.879,70.989h15.76v58.062c0,7.245-5.895,13.14-13.14,13.14s-13.139-5.895-13.139-13.14s5.894-13.139,13.139-13.139v-12
		c-13.862,0-25.139,11.277-25.139,25.139s11.277,25.14,25.139,25.14s25.14-11.278,25.14-25.14V58.989h-27.76V70.989z"/>
                        <path d="M151.603,133.606c-2.605,3.162-6.072,5.585-10.035,6.918l2.022,4.441c0.75,1.648,0.814,3.49,0.179,5.186
		s-1.892,3.043-3.54,3.794c-2.486,1.132-5.392,0.669-7.404-1.181l-8.122,8.834c3.544,3.259,8.092,4.963,12.706,4.963
		c2.634,0,5.291-0.556,7.792-1.695c9.424-4.291,13.6-15.449,9.309-24.873L151.603,133.606z"/>
                        <path d="M154.64,119.576c0-1.848-0.253-3.669-0.742-5.418c-0.815-2.915-2.285-5.629-4.329-7.929l-3.685-4.146l-8.291,7.369
		l3.684,4.145c0.366,0.412,0.691,0.854,0.973,1.319c0.422,0.698,0.747,1.449,0.966,2.233c0.219,0.784,0.332,1.6,0.332,2.428
		c0,2.173-0.773,4.169-2.06,5.727c-1.654,2.003-4.155,3.282-6.949,3.282s-5.295-1.279-6.949-3.282
		c-1.286-1.558-2.06-3.554-2.06-5.727V59.443h-11.092v60.133c0,11.084,9.017,20.101,20.101,20.101S154.64,130.66,154.64,119.576z"/>
                        <g>
                            <path d="M114.385,140.799c-1.246,0-2.469,0.505-3.345,1.38c-0.884,0.884-1.388,2.106-1.388,3.352c0,1.246,0.505,2.461,1.388,3.345
			c0.876,0.883,2.098,1.388,3.345,1.388s2.469-0.505,3.352-1.388c0.875-0.884,1.38-2.098,1.38-3.345c0-1.246-0.505-2.469-1.38-3.352
			C116.854,141.304,115.632,140.799,114.385,140.799z"/>
                        </g>
                        <g>
                            <path d="M128.772,148.877c0.884-0.884,1.389-2.098,1.389-3.345c0-1.246-0.505-2.469-1.389-3.352
			c-0.875-0.876-2.097-1.38-3.344-1.38s-2.461,0.505-3.345,1.38c-0.884,0.884-1.388,2.106-1.388,3.352
			c0,1.246,0.505,2.469,1.388,3.345c0.884,0.883,2.098,1.388,3.345,1.388S127.897,149.76,128.772,148.877z"/>
                        </g>
                    </g>
                </svg>

            );
        default:
            return null;
    }
};
