export const blogData = [
    {
        id: "post-1",
        slug: "intercom-evil-portal",
        date: "2026-02-20",
        title: "The Classic 'Intercom' Evil Portal",
        excerpt: "Evil portal attacks aren't particularly technical feats, but in my experience they are hilariously effective. NO ONE can resist the <insert company apartment or office building name> Intercom.  ",
        content: `Evil portal attacks aren't particularly technical feats, but in my experience they are often hilariously effective.
         NO ONE can resist the classic '<insert company apartment or office building name> Intercom' ESSID.
         It's just funny and harmless sounding enough that, with the right amount of subtle egging certain people will throw their creds
         in without a second thought. 
         
         Why is the intercom broadcasted on 2.4ghz? Why does it prompt me to enter my employee ID/email/Resident ID and password? Why have i never heard
         an intercom in this building before?

         Doesnt matter bro, just put your creds in it'll be funny.

         Furthermore when I am doing this for a pentest (or an authorized prank) I usually rip the HTML/CSS/JS from thier real login page 
         (whether that be from a website, wifi login, or whatever else) and then change the header to "Intercom" and host it on a laptop 
         or my Pi 3 (Flipper with ESP32 if im doing a demo).

        Even though intercom is my favorite evil portal, I also like these

        - Ring-Camera-Setup
            - Good for harvesting Ring or google creds
        - Garage_Gate_Controller
            - Good for harvesting company creds 
        - SmartThermostat_AP
            - Could harvest whatever, just use a fake page to bait user into thinking they can control the thermostat then redirect to 
            a page that says "Your thermostat is broken, please contact building maintenance" or "Login to control your thermostat as a guest".
        - <real wifi name>_5ghz
            - Good for harvesting company creds 

        The point is the more curious the target is the more likely they are to interact with the rogue AP. The classic 'Guest Wifi' or 
        'Free Wifi' doesnt really cut it anymore, some relatively innocent fun or the mild voyeurism of accessing public cameras is usually enough to get the job done.

         
         `,
        tags: ["Go", "Milestone"],
        relatedProjectSlug: "vuln-scanner-go"
    },
    {
        id: "post-3",
        slug: "site-redesign-react",
        date: "2026-01-15",
        title: "Site Redesign",
        excerpt: "Ported my old HTML blog over to a React SPA.",
        content: 'Ported my old HTML blog over to a React SPA. I\'m not a web developer so I vibe coded the style and layout stuff. I think it looks pretty good as it is now but its missing some of the janky early 2000s swag my old site had.',
        tags: ["Meta"],
        relatedProjectSlug: null
    }
];
