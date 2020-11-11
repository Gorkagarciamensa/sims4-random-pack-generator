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
  type?: string;
  type_key?: string;
}
export const Expansion_Packs: DataBaseInterface = {
  expansion_pack: [
    {
      type_key: 'expansion_pack',
      type: 'Expansion Pack',
      name: 'Get to Work',
      icon: 'assets/icons/get_to_work.png',
    },
    {
      type_key: 'expansion_pack',
      type: 'Expansion Pack',
      name: 'Get Together',
      icon: 'assets/icons/get_together.png',
    },
    {
      type_key: 'expansion_pack',
      type: 'Expansion Pack',
      name: 'City Living',
      icon: 'assets/icons/city_living.png',
    },
    {
      type_key: 'expansion_pack',
      type: 'Expansion Pack',
      name: 'Cats & Dogs',
      icon: 'assets/icons/cats_dogs.png',
    },
    {
      type_key: 'expansion_pack',
      type: 'Expansion Pack',
      name: 'Seasons',
      icon: 'assets/icons/seasons.png',
    },
    {
      type_key: 'expansion_pack',
      type: 'Expansion Pack',
      name: 'Get Famous',
      icon: 'assets/icons/get_famous.png',
    },
    {
      type_key: 'expansion_pack',
      type: 'Expansion Pack',
      name: 'Island Living',
      icon: 'assets/icons/island_living.png',
    },
    {
      type_key: 'expansion_pack',
      type: 'Expansion Pack',
      name: 'Discover University',
      icon: 'assets/icons/discover_university.png',
    },
    {
      type_key: 'expansion_pack',
      type: 'Expansion Pack',
      name: 'Eco Living',
      icon: 'assets/icons/eco_living.png',
    },
    {
      type_key: 'expansion_pack',
      type: 'Expansion Pack',
      name: 'Snowy Escape',
      icon: 'assets/icons/snowy_escape.png',
    },
  ],
  game_pack: [
    {
      type_key: 'game_pack',
      type: 'Game Pack',
      name: 'Outdoor Retreat',
      icon: 'assets/icons/outdoor_retreat.png',
    },
    {
      type_key: 'game_pack',
      type: 'Game Pack',
      name: 'Spa Day',
      icon: 'assets/icons/spa_day.png',
    },
    {
      type_key: 'game_pack',
      type: 'Game Pack',
      name: 'Dine Out',
      icon: 'assets/icons/dine_out.png',
    },
    {
      type_key: 'game_pack',
      type: 'Game Pack',
      name: 'Vampires',
      icon: 'assets/icons/vampires.png',
    },
    {
      type_key: 'game_pack',
      type: 'Game Pack',
      name: 'Parenthood',
      icon: 'assets/icons/parenthood.png',
    },
    {
      type_key: 'game_pack',
      type: 'Game Pack',
      name: 'Jungle Adventure',
      icon: 'assets/icons/jungle_adventure.png',
    },
    {
      type_key: 'game_pack',
      type: 'Game Pack',
      name: 'Strangerville',
      icon: 'assets/icons/strangerville.png',
    },
    {
      type_key: 'game_pack',
      type: 'Game Pack',
      name: 'Realm of Magic',
      icon: 'assets/icons/realm_of_magic.png',
    },
  ],
  stuff_pack: [
    {
      type_key: 'stuff_pack',
      type: 'Stuff Pack',
      name: 'Nifty Knitting',
      icon: 'assets/icons/nifty_knitting.png',
    },
    {
      type_key: 'stuff_pack',
      type: 'Stuff Pack',
      name: 'Movie Hangout',
      icon: 'assets/icons/movie_hangout.png',
    },
    {
      type_key: 'stuff_pack',
      type: 'Stuff Pack',
      name: 'Kids Room',
      icon: 'assets/icons/kids_room.png',
    },
    {
      type_key: 'stuff_pack',
      type: 'Stuff Pack',
      name: 'Backyard',
      icon: 'assets/icons/backyard.png',
    },
    {
      type_key: 'stuff_pack',
      type: 'Stuff Pack',
      name: 'Vintage Glamour',
      icon: 'assets/icons/vintage_glamour.png',
    },
    {
      type_key: 'stuff_pack',
      type: 'Stuff Pack',
      name: 'Toddler',
      icon: 'assets/icons/toddler.png',
    },
    {
      type_key: 'stuff_pack',
      type: 'Stuff Pack',
      name: 'Laundry Day',
      icon: 'assets/icons/laundry_day.png',
    },
    {
      type_key: 'stuff_pack',
      type: 'Stuff Pack',
      name: 'Tiny Living',
      icon: 'assets/icons/tiny_living.png',
    },
  ],
  house_generator: [
    {
      type_key: 'house_generator',
      type: 'House Generator',
      name: 'To Build',
      icon: 'assets/Hammer.png',
    },
    {
      type_key: 'house_generator',
      type: 'House Generator',
      name: 'To Upgrade',
      icon: 'assets/WoodworkBench.png',
    },
    {
      type_key: 'house_generator',
      type: 'House Generator',
      name: 'Base Game Mode',
      icon: 'assets/House.png',
    },
  ],
  world_generator: [
    {
      type_key: 'world_generator',
      type: 'World Generator',
      name: 'Evergreen Harbor',
      icon: 'assets/icons/evergreen_harbor.png',
    },
    {
      type_key: 'world_generator',
      type: 'World Generator',
      name: 'Glimmerbrook',
      icon: 'assets/icons/glimmerbrook.png',
    },
    {
      type_key: 'world_generator',
      type: 'World Generator',
      name: 'Britechester',
      icon: 'assets/icons/britechester.png',
    },
    {
      type_key: 'world_generator',
      type: 'World Generator',
      name: 'Sulani',
      icon: 'assets/icons/sulani.png',
    },
    {
      type_key: 'world_generator',
      type: 'World Generator',
      name: 'Del Sol Valley',
      icon: 'assets/icons/del_sol_valley.png',
    },
    {
      type_key: 'world_generator',
      type: 'World Generator',
      name: 'Strangerville',
      icon: 'assets/icons/strangerville_world.png',
    },
    {
      type_key: 'world_generator',
      type: 'World Generator',
      name: 'Forgotten Hollow',
      icon: 'assets/icons/forgotten_hollow.png',
    },
    {
      type_key: 'world_generator',
      type: 'World Generator',
      name: 'Brindleton Bay',
      icon: 'assets/icons/brindleton_bay.png',
    },
    {
      type_key: 'world_generator',
      type: 'World Generator',
      name: 'San Myshuno',
      icon: 'assets/icons/san_myshuno.png',
    },
    {
      type_key: 'world_generator',
      type: 'World Generator',
      name: 'Windenburg',
      icon: 'assets/icons/windenburg.png',
    },
    {
      type_key: 'world_generator',
      type: 'World Generator',
      name: 'Magnolia Promenade',
      icon: 'assets/icons/magnolia_promenade.png',
    },
    {
      type_key: 'world_generator',
      type: 'World Generator',
      name: 'Oasis Spring',
      icon: 'assets/icons/oasis_spring.png',
    },
    {
      type_key: 'world_generator',
      type: 'World Generator',
      name: 'Willow Creek',
      icon: 'assets/icons/willow_creek.png',
    },
    {
      type_key: 'world_generator',
      type: 'World Generator',
      name: 'Mt. Komorebi',
      icon: '',
    },
  ],
};
