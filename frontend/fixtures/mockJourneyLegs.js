const mockLegs = [
  {
    $type:
      'Tfl.Api.Presentation.Entities.JourneyPlanner.Leg, Tfl.Api.Presentation.Entities',
    duration: 16,
    instruction: {
      $type:
        'Tfl.Api.Presentation.Entities.Instruction, Tfl.Api.Presentation.Entities',
      summary: 'Walk to Sloane Square',
      detailed: 'Walk to Sloane Square',
      steps: [Array],
    },
    obstacles: [],
    departureTime: '2023-03-04T13:45:00',
    arrivalTime: '2023-03-04T14:01:00',
    departurePoint: {
      $type:
        'Tfl.Api.Presentation.Entities.StopPoint, Tfl.Api.Presentation.Entities',
      platformName: '',
      icsCode: '99999997',
      commonName: 'SW3 3QF',
      placeType: 'StopPoint',
      additionalProperties: [],
      lat: 51.491912053,
      lon: -0.16925556371,
    },
    arrivalPoint: {
      $type:
        'Tfl.Api.Presentation.Entities.StopPoint, Tfl.Api.Presentation.Entities',
      naptanId: '490G00206H',
      platformName: 'D',
      icsCode: '1000206',
      individualStopId: '9400ZZLUSSQ',
      commonName: 'Sloane Square',
      placeType: 'StopPoint',
      additionalProperties: [],
      lat: 51.49249030609,
      lon: -0.1568004995,
    },
    path: {
      $type:
        'Tfl.Api.Presentation.Entities.JourneyPlanner.Path, Tfl.Api.Presentation.Entities',
      lineString:
        '[[51.49191205300, -0.16925556371],[51.49176129494, -0.16881504191],[51.49219603146, -0.16843748804],[51.49175386674, -0.16776375979],[51.49131147324, -0.16707564853],[51.49105353983, -0.16668265408],[51.49095198342, -0.16651386870],[51.49082301595, -0.16631737405],[51.49060192813, -0.16598052867],[51.49060888863, -0.16585060572],[51.49068434342, -0.16492566573],[51.49072947757, -0.16436206285],[51.49084309034, -0.16300343660],[51.49091205338, -0.16281340021],[51.49088441621, -0.16277129643],[51.49073724332, -0.16256113962],[51.49037863477, -0.16205698563],[51.49043097644, -0.16195404705],[51.49064978043, -0.16157072043],[51.49081601642, -0.16127593474],[51.49104312765, -0.16084905228],[51.49117386602, -0.16058450024],[51.49121721952, -0.16048191993],[51.49147891983, -0.15996720626],[51.49168782653, -0.15952663890],[51.49175768767, -0.15939417834],[51.49179273117, -0.15933514598],[51.49212270427, -0.15858718302],[51.49226756727, -0.15807715734],[51.49231334678, -0.15755671781],[51.49244401430, -0.15671593402],[51.49249816150, -0.15672815536]]',
      stopPoints: [],
      elevation: [],
    },
    routeOptions: [[Object]],
    mode: {
      $type:
        'Tfl.Api.Presentation.Entities.Identifier, Tfl.Api.Presentation.Entities',
      id: 'walking',
      name: 'walking',
      type: 'Mode',
      routeType: 'Unknown',
      status: 'Unknown',
      motType: '100',
      network: '',
    },
    disruptions: [],
    plannedWorks: [],
    distance: 1055,
    isDisrupted: false,
    hasFixedLocations: true,
    scheduledDepartureTime: '2023-03-04T13:45:00',
    scheduledArrivalTime: '2023-03-04T14:01:00',
  },
  {
    $type:
      'Tfl.Api.Presentation.Entities.JourneyPlanner.Leg, Tfl.Api.Presentation.Entities',
    duration: 3,
    instruction: {
      $type:
        'Tfl.Api.Presentation.Entities.Instruction, Tfl.Api.Presentation.Entities',
      summary: '137 bus to Wilton Street',
      detailed: '137 bus towards Marble Arch',
      steps: [],
    },
    obstacles: [],
    departureTime: '2023-03-04T14:01:00',
    arrivalTime: '2023-03-04T14:04:00',
    departurePoint: {
      $type:
        'Tfl.Api.Presentation.Entities.StopPoint, Tfl.Api.Presentation.Entities',
      naptanId: '490G00206H',
      platformName: 'D',
      stopLetter: 'D',
      icsCode: '1000206',
      individualStopId: '490000206D',
      commonName: 'Sloane Square',
      placeType: 'StopPoint',
      additionalProperties: [],
      lat: 51.49326152208,
      lon: -0.15609232415,
    },
    arrivalPoint: {
      $type:
        'Tfl.Api.Presentation.Entities.StopPoint, Tfl.Api.Presentation.Entities',
      naptanId: '490G00014728',
      platformName: 'U',
      stopLetter: 'U',
      icsCode: '1014728',
      individualStopId: '490005138N',
      commonName: 'Wilton Street',
      placeType: 'StopPoint',
      additionalProperties: [],
      lat: 51.499379255790004,
      lon: -0.14828141203,
    },
    path: {
      $type:
        'Tfl.Api.Presentation.Entities.JourneyPlanner.Path, Tfl.Api.Presentation.Entities',
      lineString:
        '[[51.49318487980, -0.15600726014],[51.49319680340, -0.15597969020],[51.49383744255, -0.15497423752],[51.49420560017, -0.15436872636],[51.49434599012, -0.15414696524],[51.49503018648, -0.15305326280],[51.49553849313, -0.15221155030],[51.49640708013, -0.15083660090],[51.49738929756, -0.14925529800],[51.49768712135, -0.14875339221],[51.49790610800, -0.14838433966],[51.49799950610, -0.14803478150],[51.49813215108, -0.14732344940],[51.49833588950, -0.14712789254],[51.49878215481, -0.14748438788],[51.49915652497, -0.14784380474],[51.49943592033, -0.14814766902]]',
      stopPoints: [Array],
      elevation: [],
    },
    routeOptions: [[Object]],
    mode: {
      $type:
        'Tfl.Api.Presentation.Entities.Identifier, Tfl.Api.Presentation.Entities',
      id: 'bus',
      name: 'bus',
      type: 'Mode',
      routeType: 'Unknown',
      status: 'Unknown',
      motType: '3',
      network: 'tfl',
    },
    disruptions: [[Object]],
    plannedWorks: [],
    isDisrupted: true,
    hasFixedLocations: true,
    scheduledDepartureTime: '2023-03-04T14:01:00',
    scheduledArrivalTime: '2023-03-04T14:04:00',
    interChangeDuration: '5',
    interChangePosition: 'AFTER',
  },
  {
    $type:
      'Tfl.Api.Presentation.Entities.JourneyPlanner.Leg, Tfl.Api.Presentation.Entities',
    duration: 25,
    instruction: {
      $type:
        'Tfl.Api.Presentation.Entities.Instruction, Tfl.Api.Presentation.Entities',
      summary: '2 bus to Brixton Academy',
      detailed: '2 bus towards West Norwood',
      steps: [],
    },
    obstacles: [],
    departureTime: '2023-03-04T14:12:00',
    arrivalTime: '2023-03-04T14:37:00',
    departurePoint: {
      $type:
        'Tfl.Api.Presentation.Entities.StopPoint, Tfl.Api.Presentation.Entities',
      naptanId: '490G00014728',
      platformName: 'S',
      stopLetter: 'S',
      icsCode: '1014728',
      individualStopId: '490014728S',
      commonName: 'Wilton Street',
      placeType: 'StopPoint',
      additionalProperties: [],
      lat: 51.49928279445,
      lon: -0.14786750091,
    },
    arrivalPoint: {
      $type:
        'Tfl.Api.Presentation.Entities.StopPoint, Tfl.Api.Presentation.Entities',
      naptanId: '490G00007526',
      platformName: '',
      stopLetter: 'B',
      icsCode: '1007526',
      individualStopId: '490007523B',
      commonName: 'Brixton Academy',
      placeType: 'StopPoint',
      additionalProperties: [],
      lat: 51.46523771839,
      lon: -0.1151832481,
    },
    path: {
      $type:
        'Tfl.Api.Presentation.Entities.JourneyPlanner.Path, Tfl.Api.Presentation.Entities',
      lineString:
        '[[51.49924983733, -0.14794528872],[51.49915652497, -0.14784380474],[51.49878215481, -0.14748438788],[51.49833588950, -0.14712789254],[51.49826058299, -0.14691483719],[51.49824010678, -0.14675718753],[51.49826592204, -0.14554592744],[51.49822438693, -0.14462554705],[51.49816431551, -0.14423899029],[51.49807796623, -0.14389672383],[51.49789083966, -0.14400517618],[51.49749099293, -0.14430956002],[51.49719761957, -0.14452317293],[51.49702869363, -0.14464528833],[51.49674385083, -0.14482973684],[51.49657401355, -0.14489425979],[51.49617393654, -0.14518422944],[51.49605903554, -0.14474228908],[51.49623239237, -0.14433186363],[51.49618664755, -0.14371423575],[51.49618074009, -0.14352878907],[51.49618074009, -0.14352878907],[51.49616877159, -0.14315310303],[51.49625567536, -0.14296228465],[51.49627967161, -0.14277402257],[51.49625918991, -0.14261638173],[51.49617580082, -0.14246129847],[51.49534791961, -0.14192728091],[51.49534791961, -0.14192728091],[51.49516732453, -0.14181079235],[51.49472866025, -0.14136763319],[51.49453720051, -0.14120254741],[51.49420797255, -0.14085578940],[51.49407987578, -0.14071694132],[51.49377395365, -0.14013874747],[51.49369033303, -0.13996928057],[51.49349567409, -0.13960265325],[51.49326493650, -0.13910742193],[51.49326493650, -0.13910742193],[51.49279745054, -0.13810408733],[51.49267650856, -0.13784971517],[51.49256432412, -0.13758058192],[51.49231322198, -0.13705781461],[51.49209022149, -0.13660593388],[51.49201604013, -0.13646490529],[51.49196028961, -0.13635193616],[51.49160712421, -0.13563167277],[51.49142098088, -0.13523592243],[51.49133558138, -0.13506616819],[51.49133558138, -0.13506616819],[51.49130026176, -0.13499596138],[51.49107725349, -0.13454410080],[51.49092796958, -0.13420447447],[51.49043563690, -0.13321623534],[51.49037350929, -0.13309346717],[51.49037350929, -0.13309346717],[51.49015709713, -0.13266582735],[51.48990597353, -0.13214311481],[51.48974746677, -0.13178947721],[51.48961706594, -0.13150671587],[51.48944957061, -0.13115345023],[51.48930096543, -0.13085703253],[51.48885399770, -0.12989581622],[51.48867682209, -0.12949974550],[51.48842430655, -0.12889069853],[51.48830265582, -0.12859319098],[51.48823768145, -0.12846621395],[51.48764024110, -0.12709349218],[51.48704324512, -0.12574959524],[51.48698748448, -0.12563665158],[51.48693172374, -0.12552370820],[51.48685660886, -0.12532513647],[51.48657204732, -0.12440057081],[51.48634231519, -0.12409311927],[51.48629507908, -0.12395102231],[51.48537728139, -0.12447840359],[51.48456686071, -0.12497255259],[51.48451985588, -0.12484485373],[51.48453736886, -0.12481532929],[51.48458967759, -0.12471236224],[51.48512381294, -0.12437357833],[51.48547250048, -0.12412061876],[51.48547250048, -0.12412061876],[51.48615498207, -0.12362549166],[51.48478071701, -0.12316339462],[51.48451779999, -0.12303015990],[51.48440051262, -0.12300617007],[51.48423783115, -0.12295523856],[51.48381637972, -0.12303015587],[51.48367259315, -0.12303605995],[51.48354402203, -0.12309160500],[51.48354402203, -0.12309160500],[51.48337787640, -0.12316338242],[51.48316380908, -0.12327298956],[51.48262552636, -0.12391439199],[51.48228978942, -0.12428822811],[51.48189975204, -0.12443149058],[51.48189975204, -0.12443149058],[51.48158352592, -0.12454763994],[51.48115308643, -0.12462290627],[51.48102727301, -0.12462806746],[51.48053923029, -0.12447526693],[51.48042171292, -0.12443688295],[51.48026755818, -0.12435679727],[51.48005746427, -0.12421015289],[51.48005746427, -0.12421015289],[51.47931267493, -0.12369030578],[51.47908570510, -0.12355560776],[51.47888707708, -0.12350615511],[51.47843682224, -0.12346703072],[51.47822008720, -0.12344026742],[51.47822008720, -0.12344026742],[51.47782411630, -0.12339137195],[51.47724689628, -0.12328545704],[51.47559657627, -0.12299318850],[51.47456725740, -0.12273304381],[51.47432231314, -0.12259910188],[51.47386899390, -0.12247156542],[51.47386899390, -0.12247156542],[51.47351835151, -0.12237291767],[51.47333562217, -0.12219322739],[51.47320450765, -0.12186742441],[51.47314413286, -0.12146672030],[51.47294043648, -0.12166227974],[51.47239340418, -0.12231831305],[51.47212841187, -0.12205561073],[51.47194637356, -0.12191909578],[51.47149214272, -0.12154212606],[51.47149214272, -0.12154212606],[51.47123550044, -0.12132914033],[51.47088893417, -0.12102660556],[51.47035064871, -0.12054477240],[51.46980360539, -0.12007770877],[51.46962195566, -0.11991576933],[51.46962195566, -0.11991576933],[51.46940219301, -0.11971985446],[51.46923835617, -0.11959700646],[51.46897428117, -0.11939189220],[51.46835581003, -0.11889184858],[51.46835581003, -0.11889184858],[51.46812697975, -0.11870683951],[51.46795346255, -0.11854120327],[51.46768869300, -0.11829293610],[51.46753291762, -0.11811217532],[51.46747807386, -0.11805684130],[51.46701097685, -0.11752895550],[51.46691027543, -0.11741792035],[51.46659987711, -0.11712835134],[51.46635330907, -0.11689374738],[51.46630318622, -0.11685080795],[51.46630318622, -0.11685080795],[51.46588828732, -0.11649537492],[51.46583413625, -0.11648320762],[51.46570601160, -0.11634451268],[51.46560369087, -0.11613277052],[51.46527875312, -0.11549829023],[51.46516894191, -0.11526691116]]',
      stopPoints: [Array],
      elevation: [],
    },
    routeOptions: [[Object]],
    mode: {
      $type:
        'Tfl.Api.Presentation.Entities.Identifier, Tfl.Api.Presentation.Entities',
      id: 'bus',
      name: 'bus',
      type: 'Mode',
      routeType: 'Unknown',
      status: 'Unknown',
      motType: '3',
      network: 'tfl',
    },
    disruptions: [[Object]],
    plannedWorks: [],
    isDisrupted: true,
    hasFixedLocations: true,
    scheduledDepartureTime: '2023-03-04T14:12:00',
    scheduledArrivalTime: '2023-03-04T14:37:00',
  },
  {
    $type:
      'Tfl.Api.Presentation.Entities.JourneyPlanner.Leg, Tfl.Api.Presentation.Entities',
    duration: 1,
    instruction: {
      $type:
        'Tfl.Api.Presentation.Entities.Instruction, Tfl.Api.Presentation.Entities',
      summary: 'Walk to SW9 9SL',
      detailed: 'Walk to SW9 9SL',
      steps: [Array],
    },
    obstacles: [],
    departureTime: '2023-03-04T14:37:00',
    arrivalTime: '2023-03-04T14:38:00',
    departurePoint: {
      $type:
        'Tfl.Api.Presentation.Entities.StopPoint, Tfl.Api.Presentation.Entities',
      naptanId: '490G00007526',
      platformName: '',
      stopLetter: 'B',
      icsCode: '1007526',
      individualStopId: '490007523B',
      commonName: 'Brixton Academy',
      placeType: 'StopPoint',
      additionalProperties: [],
      lat: 51.46523771839,
      lon: -0.1151832481,
    },
    arrivalPoint: {
      $type:
        'Tfl.Api.Presentation.Entities.Place, Tfl.Api.Presentation.Entities',
      commonName: 'SW9 9SL',
      placeType: 'StopPoint',
      lat: 51.46534532687,
      lon: -0.11516441701,
    },
    path: {
      $type:
        'Tfl.Api.Presentation.Entities.JourneyPlanner.Path, Tfl.Api.Presentation.Entities',
      lineString:
        '[[51.46516721295, -0.11527253485],[51.46527875312, -0.11549829023],[51.46540340990, -0.11542116951],[51.46534532687, -0.11516441701]]',
      stopPoints: [],
      elevation: [],
    },
    routeOptions: [[Object]],
    mode: {
      $type:
        'Tfl.Api.Presentation.Entities.Identifier, Tfl.Api.Presentation.Entities',
      id: 'walking',
      name: 'walking',
      type: 'Mode',
      routeType: 'Unknown',
      status: 'Unknown',
      motType: '100',
      network: '',
    },
    disruptions: [],
    plannedWorks: [],
    distance: 35,
    isDisrupted: false,
    hasFixedLocations: false,
    scheduledDepartureTime: '2023-03-04T14:37:00',
    scheduledArrivalTime: '2023-03-04T14:38:00',
  },
];

export default mockLegs;
