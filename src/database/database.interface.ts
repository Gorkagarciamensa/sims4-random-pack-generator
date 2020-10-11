export interface DataBaseInterface {
  expansion_pack: NameIconInterface[];
  game_pack: NameIconInterface[];
  stuff_pack: NameIconInterface[];
  house_generator: NameIconInterface[];
  world_generator: NameIconInterface[];
}

export interface NameIconInterface {
  name: string;
  icon: string;
  id?: string;
  type?: string;
}
export const Expansion_Packs: DataBaseInterface = {
  expansion_pack: [
    {
      type: 'Expansion Pack',
      name: 'Get to Work',
      icon:
        'https://vignette.wikia.nocookie.net/sims/images/d/d1/TS4GTW_Icon.png/revision/latest?cb=20190717095333',
    },
    {
      type: 'Expansion Pack',
      name: 'Get Together',
      icon:
        'https://vignette.wikia.nocookie.net/sims/images/e/ea/TS4GT_Icon.png/revision/latest?cb=20190717095425',
    },
    {
      type: 'Expansion Pack',
      name: 'City Living',
      icon:
        'https://vignette.wikia.nocookie.net/sims/images/0/0c/TS4_City_Living_Icon.png/revision/latest?cb=20190717102041',
    },
    {
      type: 'Expansion Pack',
      name: 'Cats & Dogs',
      icon:
        'https://vignette.wikia.nocookie.net/sims/images/b/b5/TS4_Cats_and_Dogs_Icon.png/revision/latest?cb=20190717102130',
    },
    {
      type: 'Expansion Pack',
      name: 'Seasons',
      icon:
        'https://vignette.wikia.nocookie.net/sims/images/3/33/TS4_Seasons_Icon.png/revision/latest?cb=20190717102337',
    },
    {
      type: 'Expansion Pack',
      name: 'Get Famous',
      icon:
        'https://vignette.wikia.nocookie.net/sims/images/5/52/TS4_EP6_GF_Icon.png/revision/latest?cb=20190717102414',
    },
    {
      type: 'Expansion Pack',
      name: 'Island Living',
      icon:
        'https://vignette.wikia.nocookie.net/sims/images/e/ea/TS4_EP7_Island_Living_Icon.png/revision/latest?cb=20190717102455',
    },
    {
      type: 'Expansion Pack',
      name: 'Discover University',
      icon:
        'https://vignette.wikia.nocookie.net/sims/images/5/57/TS4_EP8_Discover_University_Icon.png/revision/latest?cb=20191022154656',
    },
    {
      type: 'Expansion Pack',
      name: 'Eco Living',
      icon:
        'https://vignette.wikia.nocookie.net/sims/images/c/c2/TS4_EP9_Eco_Lifestyle_Icon.png/revision/latest?cb=20200506162724',
    },
  ],
  game_pack: [
    {
      type: 'Game Pack',
      name: 'Outdoor Retreat',
      icon:
        'https://vignette.wikia.nocookie.net/sims/images/e/e6/TS4OR_Icon.png/revision/latest?cb=20190717103746',
    },
    {
      type: 'Game Pack',
      name: 'Spa Day',
      icon:
        'https://vignette.wikia.nocookie.net/sims/images/4/46/TS4SD_Icon.png/revision/latest?cb=20190717103832',
    },
    {
      type: 'Game Pack',
      name: 'Dine Out',
      icon:
        'https://vignette.wikia.nocookie.net/sims/images/4/4b/TS4DO_Icon.png/revision/latest?cb=20190717103914',
    },
    {
      type: 'Game Pack',
      name: 'Vampires',
      icon:
        'https://vignette.wikia.nocookie.net/sims/images/1/17/The_Sims_4_Vampires_Icon.png/revision/latest?cb=20190717103951',
    },
    {
      type: 'Game Pack',
      name: 'Parenthood',
      icon:
        'https://vignette.wikia.nocookie.net/sims/images/6/6b/Parenthood_Icon.png/revision/latest?cb=20190717104047',
    },
    {
      type: 'Game Pack',
      name: 'Jungle Adventure',
      icon:
        'https://vignette.wikia.nocookie.net/sims/images/5/55/TS4AT_Icon.png/revision/latest?cb=20190717104231',
    },
    {
      type: 'Game Pack',
      name: 'Strangerville',
      icon:
        'https://vignette.wikia.nocookie.net/sims/images/3/3c/The_Sims_4_StrangerVille_Icon.png/revision/latest?cb=20190717104324',
    },
    {
      type: 'Game Pack',
      name: 'Realm of Magic',
      icon:
        'https://vignette.wikia.nocookie.net/sims/images/1/19/Realm_of_Magic_icon.png/revision/latest?cb=20190820164201',
    },
  ],
  stuff_pack: [
    {
      type: 'Stuff Pack',
      name: 'Nifty Knitting',
      icon:
        'https://vignette.wikia.nocookie.net/sims/images/b/b2/TS4SP17Icon.png/revision/latest?cb=20200502181538',
    },
    {
      type: 'Stuff Pack',
      name: 'Movie Hangout',
      icon:
        'https://vignette.wikia.nocookie.net/sims/images/a/a2/TS4MHS_Icon.png/revision/latest?cb=20190717120652',
    },
    {
      type: 'Stuff Pack',
      name: 'Kids Room',
      icon:
        'https://vignette.wikia.nocookie.net/sims/images/2/21/The_Sims_4_Kids_Room_Stuff_Logo.png/revision/latest?cb=20190717121039',
    },
    {
      type: 'Stuff Pack',
      name: 'Backyard',
      icon:
        'https://vignette.wikia.nocookie.net/sims/images/1/16/Backyard_stuff_icon.png/revision/latest?cb=20190717121121',
    },
    {
      type: 'Stuff Pack',
      name: 'Vintage Glamour',
      icon:
        'https://vignette.wikia.nocookie.net/sims/images/c/c9/Vintage_Glamour_Stuff_Icon.png/revision/latest?cb=20190717121201',
    },
    {
      type: 'Stuff Pack',
      name: 'Toddler',
      icon:
        'https://vignette.wikia.nocookie.net/sims/images/a/ab/TS4_Toddler_Icon.png/revision/latest?cb=20190717121414',
    },
    {
      type: 'Stuff Pack',
      name: 'Laundry Day',
      icon:
        'https://vignette.wikia.nocookie.net/sims/images/5/52/TS4_Laundry_Day_Stuff_Icon.png/revision/latest?cb=20190717121449',
    },
    {
      type: 'Stuff Pack',
      name: 'Tiny Living',
      icon:
        'https://vignette.wikia.nocookie.net/sims/images/5/51/TS4_SP16_Tiny_Living_Icon.png/revision/latest?cb=20200122100213',
    },
  ],
  house_generator: [
    {
      type: 'House Generator',
      name: 'To Build',
      icon: '../assets/Hammer.png',
    },
    {
      type: 'House Generator',
      name: 'To Upgrade',
      icon: '../assets/WoodworkBench.png',
    },
    {
      type: 'House Generator',
      name: 'Base Game Mode',
      icon: '../assets/House.png',
    },
  ],
  world_generator: [
    {
      type: 'World Generator',
      name: 'Evergreen Harbor',
      icon:
        'https://vignette.wikia.nocookie.net/sims/images/f/fa/Evergreen_Harbor_Icon.png/revision/latest?cb=20200605074616',
    },
    {
      type: 'World Generator',
      name: 'Glimmerbrook',
      icon:
        'https://vignette.wikia.nocookie.net/sims/images/0/01/GlimmerbrookLogo.png/revision/latest?cb=20190905191307',
    },
    {
      type: 'World Generator',
      name: 'Britechester',
      icon:
        'https://vignette.wikia.nocookie.net/sims/images/c/ce/BritechesterLogo.png/revision/latest?cb=20191117161413',
    },
    {
      type: 'World Generator',
      name: 'Sulani',
      icon:
        'https://vignette.wikia.nocookie.net/sims/images/0/00/Sulani_Icon.png/revision/latest?cb=20190611143639',
    },
    {
      type: 'World Generator',
      name: 'Del Sol Valley',
      icon:
        'https://vignette.wikia.nocookie.net/sims/images/7/7f/DelSolValleyLogo.png/revision/latest?cb=20181022161231',
    },
    {
      type: 'World Generator',
      name: 'Strangerville',
      icon:
        'https://vignette.wikia.nocookie.net/sims/images/9/96/StrangerVille_Icon.png/revision/latest?cb=20190228213409',
    },
    {
      type: 'World Generator',
      name: 'Forgotten Hollow',
      icon:
        'https://vignette.wikia.nocookie.net/sims/images/5/5a/ForgottenHollowWorldIcon.png/revision/latest?cb=20170716181405',
    },
    {
      type: 'World Generator',
      name: 'Brindleton Bay',
      icon:
        'https://vignette.wikia.nocookie.net/sims/images/e/ec/BrindletonBaylogo.png/revision/latest?cb=20200606064625',
    },
    {
      type: 'World Generator',
      name: 'San Myshuno',
      icon:
        'https://vignette.wikia.nocookie.net/sims/images/d/d7/SanMyshunoWorldIcon.png/revision/latest?cb=20161021205947',
    },
    {
      type: 'World Generator',
      name: 'Windernburg',
      icon:
        'https://vignette.wikia.nocookie.net/sims/images/6/6a/Windenburg.png/revision/latest?cb=20151207063616',
    },
    {
      type: 'World Generator',
      name: 'Magnolia Promenade',
      icon:
        'https://vignette.wikia.nocookie.net/sims/images/0/0e/Magnolia_Promenade_ingame_icon.png/revision/latest?cb=20200606064535',
    },
    {
      type: 'World Generator',
      name: 'Oasis Spring',
      icon:
        'https://vignette.wikia.nocookie.net/sims/images/a/a4/Oasis_Springs_ingame_icon.png/revision/latest?cb=20200606063922',
    },
    {
      type: 'World Generator',
      name: 'Willow Creek',
      icon:
        'https://vignette.wikia.nocookie.net/sims/images/2/21/Willow_Creek_ingame_icon.png/revision/latest?cb=20200606064018',
    },
  ],
};
