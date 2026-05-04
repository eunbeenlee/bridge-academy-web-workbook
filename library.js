/**
 * Bridge Academy | Elite IBL Curriculum Database (Q1)
 * Version: 1.0 (Jan - Mar)
 */
const BRIDGE_LIBRARY = [
    // --- JANUARY (Jan) ---
    // Theme A: All About Me
    { id: "JAN-A-01", theme: "All About Me", question: "나는 누구일까요?", title: "I Like Myself!", words: "Me, Smile, Special, Curly hair" },
    { id: "JAN-A-02", theme: "All About Me", question: "나는 누구일까요?", title: "The Color Monster", words: "Feelings, Red, Yellow, Blue, Scribble" },
    { id: "JAN-A-03", theme: "All About Me", question: "나는 누구일까요?", title: "My Five Senses", words: "Eyes, Ears, Nose, Mouth, Touch" },
    { id: "JAN-A-04", theme: "All About Me", question: "나는 누구일까요?", title: "The Family Book", words: "Family, House, Together, Love" },
    { id: "JAN-A-05", theme: "All About Me", question: "나는 누구일까요?", title: "From Head to Toe", words: "Body, Movement, Neck, Hands, Feet" },
    // Theme B: Me on the Map
    { id: "JAN-B-01", theme: "Me on the Map", question: "나는 세상 어디에 살고 있을까?", title: "Me on the Map", words: "Map, Street, Town, Earth, Circle" },
    { id: "JAN-B-02", theme: "Me on the Map", question: "나는 세상 어디에 살고 있을까?", title: "This Is How We Do It", words: "Friend, School, Different, Flag, Daily life" },
    { id: "JAN-B-03", theme: "Me on the Map", question: "나는 세상 어디에 살고 있을까?", title: "Whoever You Are", words: "World, Skin color, Smile, Heart, Same" },
    { id: "JAN-B-04", theme: "Me on the Map", question: "나는 세상 어디에 살고 있을까?", title: "Madeline", words: "Paris, Yellow hat, Straight line, Twelve" },
    { id: "JAN-B-05", theme: "Me on the Map", question: "나는 세상 어디에 살고 있을까?", title: "We're All Wonders", words: "One eye, Helmet, Space, Kind, Star" },

    // --- FEBRUARY (Feb) ---
    // Theme A: Little Crawlers
    { id: "FEB-A-01", theme: "Little Crawlers", question: "작은 곤충들의 세상은 어떨까?", title: "The Very Hungry Caterpillar", words: "Caterpillar, Apple, Leaf, Butterfly, Rainbow" },
    { id: "FEB-A-02", theme: "Little Crawlers", question: "작은 곤충들의 세상은 어떨까?", title: "The Very Busy Spider", words: "Spider web, Fly, Horse, Circle, Line" },
    { id: "FEB-A-03", theme: "Little Crawlers", question: "작은 곤충들의 세상은 어떨까?", title: "The Grouchy Ladybug", words: "Ladybug, Sun, Clock, Small, Angry" },
    { id: "FEB-A-04", theme: "Little Crawlers", question: "작은 곤충들의 세상은 어떨까?", title: "Waiting for Wings", words: "Egg, Caterpillar, Flower, Wing, Pattern" },
    { id: "FEB-A-05", theme: "Little Crawlers", question: "작은 곤충들의 세상은 어떨까?", title: "The Honeybee", words: "Bee, Yellow, Black, Flower, Honey" },
    // Theme B: How Things Grow
    { id: "FEB-B-01", theme: "How Things Grow", question: "아주 작은 씨앗은 어떻게 꽃이 될까?", title: "The Tiny Seed", words: "Seed, Wind, Flower, Giant, Sun" },
    { id: "FEB-B-02", theme: "How Things Grow", question: "아주 작은 씨앗은 어떻게 꽃이 될까?", title: "From Caterpillar to Butterfly", words: "Caterpillar, Chrysalis, Butterfly, Change" },
    { id: "FEB-B-03", theme: "How Things Grow", question: "아주 작은 씨앗은 어떻게 꽃이 될까?", title: "Planting a Rainbow", words: "Garden, Rainbow, Colors, Bulb, Dirt" },
    { id: "FEB-B-04", theme: "How Things Grow", question: "아주 작은 씨앗은 어떻게 꽃이 될까?", title: "A Seed Is Sleepy", words: "Seed, Shell, Soil, Water, Sprout" },
    { id: "FEB-B-05", theme: "How Things Grow", question: "아주 작은 씨앗은 어떻게 꽃이 될까?", title: "Up in the Garden and Down in the Dirt", words: "Garden, Worm, Roots, Green, Brown" },

    // --- MARCH (Mar) ---
    // Theme A: My Super Family
    { id: "MAR-A-01", theme: "My Super Family", question: "우리 가족은 어떤 초능력이 있을까?", title: "My Mom", words: "Mom, Super, Strong, Flower, Heart" },
    { id: "MAR-A-02", theme: "My Super Family", question: "우리 가족은 어떤 초능력이 있을까?", title: "My Dad", words: "Dad, Brave, Big, Sun, Together" },
    { id: "MAR-A-03", theme: "My Super Family", question: "우리 가족은 어떤 초능력이 있을까?", title: "Love You Forever", words: "Baby, Bear, Moon, Night, Family" },
    { id: "MAR-A-04", theme: "My Super Family", question: "우리 가족은 어떤 초능력이 있을까?", title: "Guess How Much I Love You", words: "Rabbit, Big, Love, Moon, High" },
    { id: "MAR-A-05", theme: "My Super Family", question: "우리 가족은 어떤 초능력이 있을까?", title: "The Night Before Mother's Day", words: "Mom, Present, Kitchen, Breakfast, Card" },
    // Theme B: Animal Homes
    { id: "MAR-B-01", theme: "Animal Homes", question: "동물들은 왜 각자 다른 집에 살까?", title: "A House is a House for Me", words: "House, Shell, Nest, Hole, Different" },
    { id: "MAR-B-02", theme: "Animal Homes", question: "동물들은 왜 각자 다른 집에 살까?", title: "Welcome Home, Bear", words: "Bear, Forest, Mountain, Stream, Home" },
    { id: "MAR-B-03", theme: "Animal Homes", question: "동물들은 왜 각자 다른 집에 살까?", title: "The Great Kapok Tree", words: "Jungle, Tree, Snake, Monkey, Green" },
    { id: "MAR-B-04", theme: "Animal Homes", question: "동물들은 왜 각자 다른 집에 살까?", title: "Over in the Meadow", words: "Meadow, Sun, Turtle, Fish, Blue" },
    { id: "MAR-B-05", theme: "Animal Homes", question: "동물들은 왜 각자 다른 집에 살까?", title: "Who Lives Here?", words: "Cave, Tree, Water, Animal, Secret" }
];