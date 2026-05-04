const BRIDGE_LIBRARY = [
    // --- JANUARY (Jan) ---
    { id: "JAN-A-1", month: "Jan", theme: "All About Me", question: "나는 누구일까요?", title: "I Like Myself!", words: "Me, Smile, Special" },
    { id: "JAN-A-2", month: "Jan", theme: "All About Me", question: "나는 누구일까요?", title: "The Color Monster", words: "Feelings, Color, Emotion" },
    { id: "JAN-A-3", month: "Jan", theme: "All About Me", question: "나는 누구일까요?", title: "My Five Senses", words: "Eyes, Ears, Nose, Mouth" },
    { id: "JAN-A-4", month: "Jan", theme: "All About Me", question: "나는 누구일까요?", title: "The Family Book", words: "Family, House, Together" },
    { id: "JAN-A-5", month: "Jan", theme: "All About Me", question: "나는 누구일까요?", title: "From Head to Toe", words: "Body, Movement, Hands" },
    { id: "JAN-A-6", month: "Jan", theme: "All About Me", question: "나는 누구일까요?", title: "Review: This is Me", words: "Identity, Name, Face" },
    { id: "JAN-B-1", month: "Jan", theme: "Me on the Map", question: "나는 세상 어디에 살고 있을까?", title: "Me on the Map", words: "Map, World, Home" },
    { id: "JAN-B-2", month: "Jan", theme: "Me on the Map", question: "나는 세상 어디에 살고 있을까?", title: "This Is How We Do It", words: "Friend, School, Different" },
    { id: "JAN-B-3", month: "Jan", theme: "Me on the Map", question: "나는 세상 어디에 살고 있을까?", title: "Whoever You Are", words: "World, Heart, Same" },
    { id: "JAN-B-4", month: "Jan", theme: "Me on the Map", question: "나는 세상 어디에 살고 있을까?", title: "Madeline", words: "Paris, Yellow hat, Twelve" },
    { id: "JAN-B-5", month: "Jan", theme: "Me on the Map", question: "나는 세상 어디에 살고 있을까?", title: "We're All Wonders", words: "Kind, Star, Unique" },
    { id: "JAN-B-6", month: "Jan", theme: "Me on the Map", question: "나는 세상 어디에 살고 있을까?", title: "My Global Village", words: "Flag, Earth, Connection" },

    // --- FEBRUARY (Feb) ---
    { id: "FEB-A-1", month: "Feb", theme: "Little Crawlers", question: "작은 곤충들의 세상은 어떨까?", title: "The Very Hungry Caterpillar", words: "Caterpillar, Food, Butterfly" },
    { id: "FEB-A-2", month: "Feb", theme: "Little Crawlers", question: "작은 곤충들의 세상은 어떨까?", title: "The Very Busy Spider", words: "Spider web, Fly, Spin" },
    { id: "FEB-A-3", month: "Feb", theme: "Little Crawlers", question: "작은 곤충들의 세상은 어떨까?", title: "The Grouchy Ladybug", words: "Ladybug, Sun, Time" },
    { id: "FEB-A-4", month: "Feb", theme: "Little Crawlers", question: "작은 곤충들의 세상은 어떨까?", title: "Waiting for Wings", words: "Egg, Flower, Wing" },
    { id: "FEB-A-5", month: "Feb", theme: "Little Crawlers", question: "작은 곤충들의 세상은 어떨까?", title: "The Honeybee", words: "Bee, Yellow, Honey" },
    { id: "FEB-A-6", month: "Feb", theme: "Little Crawlers", question: "작은 곤충들의 세상은 어떨까?", title: "Insects Everywhere", words: "Nature, Crawl, Tiny" },
    { id: "FEB-B-1", month: "Feb", theme: "How Things Grow", question: "아주 작은 씨앗은 어떻게 꽃이 될까?", title: "The Tiny Seed", words: "Seed, Wind, Flower" },
    { id: "FEB-B-2", month: "Feb", theme: "How Things Grow", question: "아주 작은 씨앗은 어떻게 꽃이 될까?", title: "From Caterpillar to Butterfly", words: "Chrysalis, Change, Fly" },
    { id: "FEB-B-3", month: "Feb", theme: "How Things Grow", question: "아주 작은 씨앗은 어떻게 꽃이 될까?", title: "Planting a Rainbow", words: "Garden, Colors, Bulb" },
    { id: "FEB-B-4", month: "Feb", theme: "How Things Grow", question: "아주 작은 씨앗은 어떻게 꽃이 될까?", title: "A Seed Is Sleepy", words: "Soil, Water, Sprout" },
    { id: "FEB-B-5", month: "Feb", theme: "How Things Grow", question: "아주 작은 씨앗은 어떻게 꽃이 될까?", title: "Up in the Garden", words: "Roots, Dirt, Green" },
    { id: "FEB-B-6", month: "Feb", theme: "How Things Grow", question: "아주 작은 씨앗은 어떻게 꽃이 될까?", title: "The Magic of Growth", words: "Life, Cycle, Nature" },

    // --- MARCH (Mar) ---
    { id: "MAR-A-1", month: "Mar", theme: "My Super Family", question: "우리 가족은 어떤 초능력이 있을까?", title: "My Mom", words: "Mom, Super, Love" },
    { id: "MAR-A-2", month: "Mar", theme: "My Super Family", question: "우리 가족은 어떤 초능력이 있을까?", title: "My Dad", words: "Dad, Brave, Strong" },
    { id: "MAR-A-3", month: "Mar", theme: "My Super Family", question: "우리 가족은 어떤 초능력이 있을까?", title: "Love You Forever", words: "Baby, Bear, Night" },
    { id: "MAR-A-4", month: "Mar", theme: "My Super Family", question: "우리 가족은 어떤 초능력이 있을까?", title: "Guess How Much I Love You", words: "Rabbit, Big, High" },
    { id: "MAR-A-5", month: "Mar", theme: "My Super Family", question: "우리 가족은 어떤 초능력이 있을까?", title: "The Night Before Mother's Day", words: "Present, Kitchen, Card" },
    { id: "MAR-A-6", month: "Mar", theme: "My Super Family", question: "우리 가족은 어떤 초능력이 있을까?", title: "Family Superpowers", words: "Together, Help, Team" },
    { id: "MAR-B-1", month: "Mar", theme: "Animal Homes", question: "동물들은 왜 각자 다른 집에 살까?", title: "A House is a House for Me", words: "Shell, Nest, Different" },
    { id: "MAR-B-2", month: "Mar", theme: "Animal Homes", question: "동물들은 왜 각자 다른 집에 살까?", title: "Welcome Home, Bear", words: "Bear, Forest, Mountain" },
    { id: "MAR-B-3", month: "Mar", theme: "Animal Homes", question: "동물들은 왜 각자 다른 집에 살까?", title: "The Great Kapok Tree", words: "Jungle, Tree, Green" },
    { id: "MAR-B-4", month: "Mar", theme: "Animal Homes", question: "동물들은 왜 각자 다른 집에 살까?", title: "Over in the Meadow", words: "Meadow, Sun, Turtle" },
    { id: "MAR-B-5", month: "Mar", theme: "Animal Homes", question: "동물들은 왜 각자 다른 집에 살까?", title: "Who Lives Here?", words: "Cave, Secret, Animal" },
    { id: "MAR-B-6", month: "Mar", theme: "Animal Homes", question: "동물들은 왜 각자 다른 집에 살까?", title: "Architects of Nature", words: "Build, Design, Safety" }
];
