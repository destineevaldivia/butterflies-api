
const butterflies = [
    {
        "id": "1",
        "common name": "Adonis Blue",
        "scientific name": "Polyommatus bellargus",
        "description": "The males have brilliant sky-blue wings, while the females are chocolate brown and far less conspicuous. Both sexes have distinctive black lines that enter or cross the white fringes of the wings.",
        "habitat": "Grassland and Heathland, or Wetlands, or Woodlands and Scrub, or Urban, or Farmland and Hedgerows, or Coastal, or Mountains and Moorland",
        "distribution": "Found in Europe, particularly in the United Kingdom.",
        "lifecycle stages": {
          "egg": "Eggs are laid on various plants.",
          "larva": "Caterpillars feed on horseshoe vetch and other plants.",
          "pupa": "Caterpillars pupate to form chrysalides.",
          "adult": "Adult butterflies emerge from the chrysalides."
        },
        "conservation status": "Least Concern"
      },
      {
        "id": "2",
        "common name": "Monarch Butterfly",
        "scientific name": "Danaus plexippus",
        "description": "Known for its distinctive orange wings with black veins and white spots along the edges. Monarchs are famous for their long-distance migrations.",
        "habitat": "Various habitats including meadows, fields, gardens, and coastal areas.",
        "distribution": "North and Central America",
        "lifecycle stages": {
          "egg": "Eggs are laid on milkweed plants.",
          "larva": "Caterpillars feed on milkweed leaves.",
          "pupa": "Caterpillars pupate in a chrysalis.",
          "adult": "Adults migrate over long distances."
        },
        "conservation status": "Near Threatened"
      },
      {
        "id": "3",
        "common name": "Painted Lady",
        "scientific name": "Vanessa cardui",
        "description": "Characterized by orange-brown wings with black and white spots. It has a wide distribution and is known for its migratory behavior.",
        "habitat": "Various open habitats including gardens, meadows, and fields.",
        "distribution": "Found on all continents except Antarctica and Australia.",
        "lifecycle stages": {
          "egg": "Eggs are laid on host plants.",
          "larva": "Caterpillars feed on thistle and other plants.",
          "pupa": "Caterpillars pupate in a loose silken cocoon.",
          "adult": "Adults are known for their migratory behavior."
        },
        "conservation status": "Not Evaluated"
      },
      {
        "id": "4",
        "common name": "Swallowtail Butterfly",
        "scientific name": "Papilio spp.",
        "description": "Large butterflies with distinctive tails on their hindwings. Various species of swallowtails are found around the world.",
        "habitat": "Varies by species, ranging from forests to gardens.",
        "distribution": "Global distribution with various species in different regions.",
        "lifecycle stages": {
          "egg": "Eggs are laid on host plants.",
          "larva": "Caterpillars feed on host plants and have unique defensive structures.",
          "pupa": "Caterpillars pupate in a chrysalis.",
          "adult": "Adults are known for their striking wing patterns."
        },
        "conservation status": "Varies by species"
      },
      {
        "id": "5",
        "common name": "Peacock Butterfly",
        "scientific name": "Aglais io",
        "description": "Known for its colorful and eye-catching wing patterns. It is a common butterfly in many parts of Europe.",
        "habitat": "Woodlands, gardens, and other open areas.",
        "distribution": "Found across Europe and parts of Asia.",
        "lifecycle stages": {
          "egg": "Eggs are laid on stinging nettle and other plants.",
          "larva": "Caterpillars feed on stinging nettle leaves.",
          "pupa": "Caterpillars pupate in a sheltered location.",
          "adult": "Adults display their vibrant wing patterns."
        },
        "conservation status": "Least Concern"
      },
      {
        "id": "6",
        "common name": "Black Swallowtail",
        "scientific name": "Papilio polyxenes",
        "description": "A North American butterfly with black wings and distinctive yellow markings. Caterpillars are known for their resemblance to bird droppings.",
        "habitat": "Various habitats including fields, gardens, and roadsides.",
        "distribution": "North America",
        "lifecycle stages": {
          "egg": "Eggs are laid on host plants including parsley and dill.",
          "larva": "Caterpillars have intricate green and black patterns.",
          "pupa": "Caterpillars pupate in a chrysalis attached to a substrate.",
          "adult": "Adults have unique wing patterns."
        },
        "conservation status": "Not Evaluated"
      },
      {
        "id": "7",
        "common name": "Red Admiral",
        "scientific name": "Vanessa atalanta",
        "description": "Recognizable by its black wings with red-orange bands and white spots. It is known for its strong flying ability.",
        "habitat": "Various habitats including gardens, parks, and woodland edges.",
        "distribution": "Found in North America, Europe, and Asia.",
        "lifecycle stages": {
          "egg": "Eggs are laid on host plants.",
          "larva": "Caterpillars feed on nettles and other plants.",
          "pupa": "Caterpillars pupate hanging from a silken thread.",
          "adult": "Adults are strong fliers with distinctive wing patterns."
        },
        "conservation status": "Not Evaluated"
      },
      {
        "id": "8",
        "common name": "Common Buckeye",
        "scientific name": "Junonia coenia",
        "description": "Known for its intricate eyespot patterns on the wings. It is found in diverse habitats across North and South America.",
        "habitat": "Varies by region, including fields, meadows, and gardens.",
        "distribution": "North and South America",
        "lifecycle stages": {
          "egg": "Eggs are laid on host plants including snapdragon and plantain.",
          "larva": "Caterpillars have spiky appearance and feed on host plants.",
          "pupa": "Caterpillars pupate hanging from a silken thread.",
          "adult": "Adults display their eyespot patterns."
        },
        "conservation status": "Not Evaluated"
      },
      {
        "id": "9",
        "common name": "Cabbage White Butterfly",
        "scientific name": "Pieris rapae",
        "description": "Small to medium-sized butterfly with white wings and black markings. It is known for its presence in gardens and agricultural areas.",
        "habitat": "Gardens, fields, and other open areas.",
        "distribution": "Found in Europe, Asia, North America, and other regions.",
        "lifecycle stages": {
          "egg": "Eggs are laid on host plants including cabbage and other cruciferous plants.",
          "larva": "Caterpillars feed on host plants and have green coloration.",
          "pupa": "Caterpillars pupate in a chrysalis attached to a substrate.",
          "adult": "Adults have white wings with black markings."
        },
        "conservation status": "Not Evaluated"
      },
      {
        "id": "10",
        "common name": "Eastern Tiger Swallowtail",
        "scientific name": "Papilio glaucus",
        "description": "A large butterfly with distinctive yellow and black wing patterns. Males and females have different appearances.",
        "habitat": "Woodlands, gardens, and other open areas.",
        "distribution": "Eastern North America",
        "lifecycle stages": {
          "egg": "Eggs are laid on host plants including cherry and tulip trees.",
          "larva": "Caterpillars resemble bird droppings and feed on host plants.",
          "pupa": "Caterpillars pupate in a chrysalis.",
          "adult": "Adults have striking wing patterns."
        },
        "conservation status": "Not Evaluated"
      }
]
export default butterflies;

