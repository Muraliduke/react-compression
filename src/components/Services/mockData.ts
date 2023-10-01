const services: any[] = [
    {
      title: 'Synthesis ',
      link: require('../../assets/images/service/1.jpg'),
      content: ['	Basics of Synthesis',
        '	High Level Synthesis Flow',
        '	Reading of Verilog RTL File',
        '	Target and Link Libraries',
        '	Resolving References with Link Libraries',
        '	Reading hierarchical Designs',
        '	Reading ddc design',
        '	Analyse & Elaborate Commands',
        '	Constraining and Compiling RTL',
        '	Post Synthesis Output Data',
        ]
    },
    {
      title: 'UPF',
      link: require('../../assets/images/service/2.jpg'),
      content:[
        '	High Level Multi-Voltage Design Concepts',
        '	Supplies and Power Domains',
        '	Power Ports and Nets',
        '	Level Shifters',
        '	Power States and PS Table',
      ]
    },
    {
			title: 'NDM Libraries',
			link: require('../../assets/images/service/3.jpg'),
			content: [
        'IC Compiler II Library Manager',
        'ICC Compiler II NDM Cell Library',
        'Cell Library Characteristics',
        'Library Manager Flow',
        'Tech Only NDM Library',
        'Technology-Only Library Flow',
        'Technology File',
        'Read TLU+ Files',
        'Tech Library Preparation',

      ]
    },
    {
    title: 'Initial Design Setup',
    link: require('../../assets/images/service/4.jpg'),
    content: [
      'Top Level, Sub-System Level and Block Level Design Setup',
      'Set up initial Design Implementation',
      'Loading Netlist from Synthesis',
      'Setting Path to dotlibs, LEFs, DEFs (if needed), Technology Files, SDC files',
      'Flow Setup and Design Setup',
      'Loop-back to Synthesis for Correlation issues correction',

    ]

    },
    {
      title: 'Floor Planning',
      link: require('../../assets/images/service/5.jpg'),
      content: [
        'Initial Floorplanning settings',
        'Define Pad Instances (Physical Cells)',
        'Pad Instance co-ordinates',
        'Start Floorplaning',
        'Core Die Size setting',

      ]
    },
    {
      title: 'Placement',
      link: require('../../assets/images/service/6.jpg'),
      content: [
        'Running placement',
        'Defining placement strategies',
        'In Place Optimization',
        'Hierarchical Placement',

      ]
    },
    {
      title: 'Power Planning',
      link: require('../../assets/images/service/7.jpg'),
      content:[
        'Defining Power Structure',
        'Logical Power/Ground Connections',
        'Setting Power Network Constraints',
        'Create and Analyze Power Structure',
      ]
    },
    {
      title: 'Scan Chain RE-Ordering and RE-Partitioning',
      link: require('../../assets/images/service/8.png'),
      content: [
        'Re-Order Scan connectivity within Chain',
        'Re-Partition Scan connectivity across Chains',
        'SCANDEF file based Scan Chain Re-Ordering',
      ]
    },
    {
      title: 'Timing Constraints',
      link: require('../../assets/images/service/9.jpg'),
      content: [
        'Constraining Register to Register Paths',
        'Constraining Inputs Paths',
        'Constraining Outputs Paths',
        'Virtual Clock',
        'Load Budgeting',
        ]
		},
		{
      title: 'Clock Tree Synthesis',
      link: require('../../assets/images/service/2.jpg'),
      content: [
        'Check Pre-CTS timing based on Global Routing and Detailed Placement',
        'Setting Clock Constraints such as Target Skew Target Insertion Delay',
        'Clock Root Attributes as Stop, Float and Exclude Pins',
        'Building for Generated and Gated Clocks',

      ]
		},
    {
      title: 'Global Routing',
      link: require('../../assets/images/service/6.jpg'),
      content: [
        'Congestion checks for Overflow again',
        'RC extraction for Net Parasitics',
        'Check Timing for Max Analysis',
        'Run Timing/Congestion aware Placement',
        'Logic Re-Structuring for Placement and Timing',

      ]
		},
		{
      title: 'Power Analysis (Static and Dynamic) ',
      link: require('../../assets/images/service/4.jpg'),
      content: [
        'Check Leakage Power Dissipation',
        'VT Cell swap for power and timing trade-off',
        'Analyzing Dynamic Power Dissipation based on GAF, SAIF, VCD',
        'Reduce Dynamic power',
        'Meet Total Power target',

      ]
		},
		{
      title: 'Engineering Change Order Flow (ECO)',
      link: require('../../assets/images/service/5.jpg'),
      content: [
        '	Functional ECO',
        '	Timing ECO',
        '	Metal Only ECO using Spare Cells for base frozen designs',
        ]
		},
    {
      title: 'Multiple Industry standard Projects',
      link: require('../../assets/images/service/9.jpg'),
      content: [
        '	Projects covering detailed flow from Input files, floorplan, power planning, placement, CTS, Routing, SPEF extraction, STA, and Physical verification.',
'	One project completely guided by the trainer',
'	Other project done by student with trainer guidance',
'	Project based on multi voltage domain',

      ]
		},
		{
      title: 'Design For Manufacturability',
      link: require('../../assets/images/service/7.jpg'),
      content: [
        'Antenna Rules and Fixes',
        'Critical Area Analysis',
        'Wire Spreading and widening',
        'Setting minimum metal jog length',
        ]

		}
  ]

export default services;