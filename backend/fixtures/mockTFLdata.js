const mockResponse = {
  data: {
    $type:
      'Tfl.Api.Presentation.Entities.JourneyPlanner.ItineraryResult, Tfl.Api.Presentation.Entities',
    journeys: [
      {
        $type:
          'Tfl.Api.Presentation.Entities.JourneyPlanner.Journey, Tfl.Api.Presentation.Entities',
        startDateTime: '2023-02-28T17:05:00',
        duration: 8,
        arrivalDateTime: '2023-02-28T17:13:00',
        legs: [
          {
            $type:
              'Tfl.Api.Presentation.Entities.JourneyPlanner.Leg, Tfl.Api.Presentation.Entities',
            duration: 5,
            instruction: {
              $type:
                'Tfl.Api.Presentation.Entities.Instruction, Tfl.Api.Presentation.Entities',
              summary: 'Walk to Stockwell Green',
              detailed: 'Walk to Stockwell Green',
              steps: [
                {
                  $type:
                    'Tfl.Api.Presentation.Entities.InstructionStep, Tfl.Api.Presentation.Entities',
                  description: 'Burgoyne Road for 70 metres',
                  turnDirection: 'STRAIGHT',
                  streetName: 'Burgoyne Road',
                  distance: 70,
                  cumulativeDistance: 70,
                  skyDirection: 327,
                  skyDirectionDescription: 'NorthWest',
                  cumulativeTravelTime: 63,
                  latitude: 51.4661593686,
                  longitude: -0.11881656326,
                  pathAttribute: {
                    $type:
                      'Tfl.Api.Presentation.Entities.PathAttribute, Tfl.Api.Presentation.Entities',
                  },
                  descriptionHeading: 'Continue along ',
                  trackType: 'None',
                },
                {
                  $type:
                    'Tfl.Api.Presentation.Entities.InstructionStep, Tfl.Api.Presentation.Entities',
                  description: 'on to Combermere Road, continue for 126 metres',
                  turnDirection: 'RIGHT',
                  streetName: 'Combermere Road',
                  distance: 126,
                  cumulativeDistance: 196,
                  skyDirection: 41,
                  skyDirectionDescription: 'NorthEast',
                  cumulativeTravelTime: 176,
                  latitude: 51.46669835326,
                  longitude: -0.11934149672,
                  pathAttribute: {
                    $type:
                      'Tfl.Api.Presentation.Entities.PathAttribute, Tfl.Api.Presentation.Entities',
                  },
                  descriptionHeading: 'Turn right',
                  trackType: 'None',
                },
                {
                  $type:
                    'Tfl.Api.Presentation.Entities.InstructionStep, Tfl.Api.Presentation.Entities',
                  description: 'on to Stockwell Road, continue for 106 metres',
                  turnDirection: 'LEFT',
                  streetName: 'Stockwell Road',
                  distance: 106,
                  cumulativeDistance: 302,
                  skyDirection: 323,
                  skyDirectionDescription: 'NorthWest',
                  cumulativeTravelTime: 274,
                  latitude: 51.46753292422,
                  longitude: -0.11811217518,
                  pathAttribute: {
                    $type:
                      'Tfl.Api.Presentation.Entities.PathAttribute, Tfl.Api.Presentation.Entities',
                  },
                  descriptionHeading: 'Turn left',
                  trackType: 'None',
                },
              ],
            },
            obstacles: [],
            departureTime: '2023-02-28T17:05:00',
            arrivalTime: '2023-02-28T17:10:00',
            departurePoint: {
              $type:
                'Tfl.Api.Presentation.Entities.StopPoint, Tfl.Api.Presentation.Entities',
              platformName: '',
              icsCode: '99999997',
              commonName: 'SW9 9QH',
              placeType: 'StopPoint',
              additionalProperties: [],
              lat: 51.466237247319995,
              lon: -0.11862619602,
            },
            arrivalPoint: {
              $type:
                'Tfl.Api.Presentation.Entities.StopPoint, Tfl.Api.Presentation.Entities',
              naptanId: '490G00012833',
              platformName: '',
              stopLetter: '->SE',
              icsCode: '1012833',
              individualStopId: '490012833S1',
              commonName: 'Stockwell Green',
              placeType: 'StopPoint',
              additionalProperties: [],
              lat: 51.46837193492,
              lon: -0.11884074305999999,
            },
            path: {
              $type:
                'Tfl.Api.Presentation.Entities.JourneyPlanner.Path, Tfl.Api.Presentation.Entities',
              lineString:
                '[[51.46623724732, -0.11862619602],[51.4661593686, -0.11881656326],[51.46669835326, -0.11934149672],[51.46753292422, -0.11811217518],[51.46768869961, -0.11829293596],[51.46795346916, -0.11854120313],[51.46812698636, -0.11870683938],[51.46836387168, -0.11889866639]]',
              stopPoints: [],
              elevation: [],
            },
            routeOptions: [
              {
                $type:
                  'Tfl.Api.Presentation.Entities.JourneyPlanner.RouteOption, Tfl.Api.Presentation.Entities',
                name: '',
                directions: [''],
                direction: '',
              },
            ],
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
            distance: 302.0,
            isDisrupted: false,
            hasFixedLocations: true,
            scheduledDepartureTime: '2023-02-28T17:05:00',
            scheduledArrivalTime: '2023-02-28T17:10:00',
          },
          {
            $type:
              'Tfl.Api.Presentation.Entities.JourneyPlanner.Leg, Tfl.Api.Presentation.Entities',
            duration: 2,
            instruction: {
              $type:
                'Tfl.Api.Presentation.Entities.Instruction, Tfl.Api.Presentation.Entities',
              summary: '322 bus to Brixton Academy',
              detailed: '322 bus towards Crystal Palace',
              steps: [],
            },
            obstacles: [],
            departureTime: '2023-02-28T17:10:00',
            arrivalTime: '2023-02-28T17:12:00',
            departurePoint: {
              $type:
                'Tfl.Api.Presentation.Entities.StopPoint, Tfl.Api.Presentation.Entities',
              naptanId: '490G00012833',
              platformName: '',
              stopLetter: '->SE',
              icsCode: '1012833',
              individualStopId: '490012833S1',
              commonName: 'Stockwell Green',
              placeType: 'StopPoint',
              additionalProperties: [],
              lat: 51.46837193492,
              lon: -0.11884074305999999,
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
              lat: 51.465237725,
              lon: -0.11518324797,
            },
            path: {
              $type:
                'Tfl.Api.Presentation.Entities.JourneyPlanner.Path, Tfl.Api.Presentation.Entities',
              lineString:
                '[[51.46835581664, -0.11889184844],[51.46812698636, -0.11870683938],[51.46795346916, -0.11854120313],[51.46768869961, -0.11829293596],[51.46753292422, -0.11811217518],[51.46747808047, -0.11805684116],[51.46701098346, -0.11752895537],[51.46691028204, -0.11741792022],[51.46659988372, -0.11712835121],[51.46635331568, -0.11689374725],[51.46630319283, -0.11685080782],[51.46630319283, -0.11685080782],[51.46588829392, -0.11649537478],[51.46583414286, -0.11648320749],[51.46570601821, -0.11634451255],[51.46560369748, -0.11613277039],[51.46527875972, -0.1154982901],[51.46516894852, -0.11526691103]]',
              stopPoints: [
                {
                  $type:
                    'Tfl.Api.Presentation.Entities.Identifier, Tfl.Api.Presentation.Entities',
                  id: '490G00012578',
                  name: 'Stansfield Road',
                  uri: '/StopPoint/490G00012578',
                  type: 'StopPoint',
                  routeType: 'Unknown',
                  status: 'Unknown',
                },
                {
                  $type:
                    'Tfl.Api.Presentation.Entities.Identifier, Tfl.Api.Presentation.Entities',
                  id: '490G00007526',
                  name: 'Brixton Academy',
                  uri: '/StopPoint/490G00007526',
                  type: 'StopPoint',
                  routeType: 'Unknown',
                  status: 'Unknown',
                },
              ],
              elevation: [],
            },
            routeOptions: [
              {
                $type:
                  'Tfl.Api.Presentation.Entities.JourneyPlanner.RouteOption, Tfl.Api.Presentation.Entities',
                name: '322',
                directions: ['Crystal Palace'],
                lineIdentifier: {
                  $type:
                    'Tfl.Api.Presentation.Entities.Identifier, Tfl.Api.Presentation.Entities',
                  id: '322',
                  name: '322',
                  uri: '/Line/322',
                  type: 'Line',
                  crowding: {
                    $type:
                      'Tfl.Api.Presentation.Entities.Crowding, Tfl.Api.Presentation.Entities',
                  },
                  routeType: 'Unknown',
                  status: 'Unknown',
                },
                direction: 'Inbound',
              },
            ],
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
            disruptions: [
              {
                $type:
                  'Tfl.Api.Presentation.Entities.Disruption, Tfl.Api.Presentation.Entities',
                category: 'PlannedWork',
                type: 'lineInfo',
                categoryDescription: 'PlannedWork',
                description:
                  'ATLANTIC ROAD, SW9; Route 322 is on diversion in both directions between 08:00 Monday 27 February until 18:00 Friday 24 March due to carriageway works. Buses are diverted via Dulwich Road and Effra Road, missing stops between Regent Road and Brixton Station.',
                summary: 'ATLANTIC ROAD, SW9 - SO23/37388 - ROUTE 322',
                additionalInfo: '',
                created: '2023-02-22T13:38:00',
                lastUpdate: '2023-02-22T13:42:00',
              },
            ],
            plannedWorks: [],
            isDisrupted: true,
            hasFixedLocations: true,
            scheduledDepartureTime: '2023-02-28T17:10:00',
            scheduledArrivalTime: '2023-02-28T17:12:00',
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
              steps: [
                {
                  $type:
                    'Tfl.Api.Presentation.Entities.InstructionStep, Tfl.Api.Presentation.Entities',
                  description: 'Stockwell Road for 20 metres',
                  turnDirection: 'STRAIGHT',
                  streetName: 'Stockwell Road',
                  distance: 20,
                  cumulativeDistance: 20,
                  skyDirection: 306,
                  skyDirectionDescription: 'NorthWest',
                  cumulativeTravelTime: 18,
                  latitude: 51.46517620621,
                  longitude: -0.11527216443,
                  pathAttribute: {
                    $type:
                      'Tfl.Api.Presentation.Entities.PathAttribute, Tfl.Api.Presentation.Entities',
                  },
                  descriptionHeading: 'Continue along ',
                  trackType: 'None',
                },
                {
                  $type:
                    'Tfl.Api.Presentation.Entities.InstructionStep, Tfl.Api.Presentation.Entities',
                  description: 'for 15 metres',
                  turnDirection: 'RIGHT',
                  streetName: '',
                  distance: 15,
                  cumulativeDistance: 35,
                  skyDirection: 19,
                  skyDirectionDescription: 'North',
                  cumulativeTravelTime: 30,
                  latitude: 51.46527875972,
                  longitude: -0.1154982901,
                  pathAttribute: {
                    $type:
                      'Tfl.Api.Presentation.Entities.PathAttribute, Tfl.Api.Presentation.Entities',
                  },
                  descriptionHeading: 'Turn right',
                  trackType: 'None',
                },
              ],
            },
            obstacles: [],
            departureTime: '2023-02-28T17:12:00',
            arrivalTime: '2023-02-28T17:13:00',
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
              lat: 51.465237725,
              lon: -0.11518324797,
            },
            arrivalPoint: {
              $type:
                'Tfl.Api.Presentation.Entities.Place, Tfl.Api.Presentation.Entities',
              commonName: 'SW9 9SL',
              placeType: 'StopPoint',
              lat: 51.46534533348,
              lon: -0.11516441688000001,
            },
            path: {
              $type:
                'Tfl.Api.Presentation.Entities.JourneyPlanner.Path, Tfl.Api.Presentation.Entities',
              lineString:
                '[[51.46517620621, -0.11527216443],[51.46527875972, -0.1154982901],[51.4654034165, -0.11542116938],[51.46534533348, -0.11516441688]]',
              stopPoints: [],
              elevation: [],
            },
            routeOptions: [
              {
                $type:
                  'Tfl.Api.Presentation.Entities.JourneyPlanner.RouteOption, Tfl.Api.Presentation.Entities',
                name: '',
                directions: [''],
                direction: '',
              },
            ],
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
            distance: 35.0,
            isDisrupted: false,
            hasFixedLocations: false,
            scheduledDepartureTime: '2023-02-28T17:12:00',
            scheduledArrivalTime: '2023-02-28T17:13:00',
          },
        ],
        fare: {
          $type:
            'Tfl.Api.Presentation.Entities.JourneyPlanner.JourneyFare, Tfl.Api.Presentation.Entities',
          totalCost: 165,
          fares: [
            {
              $type:
                'Tfl.Api.Presentation.Entities.JourneyPlanner.Fare, Tfl.Api.Presentation.Entities',
              lowZone: 0,
              highZone: 0,
              cost: 165,
              isHopperFare: false,
              peak: 0,
              offPeak: 0,
              taps: [
                {
                  $type:
                    'Tfl.Api.Presentation.Entities.JourneyPlanner.FareTap, Tfl.Api.Presentation.Entities',
                  atcoCode: '490G00012833',
                  tapDetails: {
                    $type:
                      'Tfl.Api.Presentation.Entities.JourneyPlanner.FareTapDetails, Tfl.Api.Presentation.Entities',
                    modeType: 'Bus',
                    validationType: 'Entry',
                    hostDeviceType: 'ETM',
                    busRouteId: '322',
                    nationalLocationCode: 0,
                    tapTimestamp: '2023-02-28T17:10:00+00:00',
                  },
                },
              ],
            },
          ],
          caveats: [
            {
              $type:
                'Tfl.Api.Presentation.Entities.JourneyPlanner.FareCaveat, Tfl.Api.Presentation.Entities',
              text: 'The price shown is a single adult pay as you go fare.',
              type: 'generic',
            },
          ],
        },
      },
      {
        $type:
          'Tfl.Api.Presentation.Entities.JourneyPlanner.Journey, Tfl.Api.Presentation.Entities',
        startDateTime: '2023-02-28T16:53:00',
        duration: 7,
        arrivalDateTime: '2023-02-28T17:00:00',
        legs: [
          {
            $type:
              'Tfl.Api.Presentation.Entities.JourneyPlanner.Leg, Tfl.Api.Presentation.Entities',
            duration: 7,
            instruction: {
              $type:
                'Tfl.Api.Presentation.Entities.Instruction, Tfl.Api.Presentation.Entities',
              summary: 'Walk to SW9 9SL',
              detailed: 'Walk to SW9 9SL',
              steps: [
                {
                  $type:
                    'Tfl.Api.Presentation.Entities.InstructionStep, Tfl.Api.Presentation.Entities',
                  description: 'Burgoyne Road for 70 metres',
                  turnDirection: 'STRAIGHT',
                  streetName: 'Burgoyne Road',
                  distance: 70,
                  cumulativeDistance: 70,
                  skyDirection: 327,
                  skyDirectionDescription: 'NorthWest',
                  cumulativeTravelTime: 63,
                  latitude: 51.4661593686,
                  longitude: -0.11881656326,
                  pathAttribute: {
                    $type:
                      'Tfl.Api.Presentation.Entities.PathAttribute, Tfl.Api.Presentation.Entities',
                  },
                  descriptionHeading: 'Continue along ',
                  trackType: 'None',
                },
                {
                  $type:
                    'Tfl.Api.Presentation.Entities.InstructionStep, Tfl.Api.Presentation.Entities',
                  description: 'on to Combermere Road, continue for 126 metres',
                  turnDirection: 'RIGHT',
                  streetName: 'Combermere Road',
                  distance: 126,
                  cumulativeDistance: 196,
                  skyDirection: 41,
                  skyDirectionDescription: 'NorthEast',
                  cumulativeTravelTime: 176,
                  latitude: 51.46669835326,
                  longitude: -0.11934149672,
                  pathAttribute: {
                    $type:
                      'Tfl.Api.Presentation.Entities.PathAttribute, Tfl.Api.Presentation.Entities',
                  },
                  descriptionHeading: 'Turn right',
                  trackType: 'None',
                },
                {
                  $type:
                    'Tfl.Api.Presentation.Entities.InstructionStep, Tfl.Api.Presentation.Entities',
                  description: 'on to Stockwell Road, continue for 315 metres',
                  turnDirection: 'RIGHT',
                  streetName: 'Stockwell Road',
                  distance: 315,
                  cumulativeDistance: 511,
                  skyDirection: 146,
                  skyDirectionDescription: 'SouthEast',
                  cumulativeTravelTime: 458,
                  latitude: 51.46753292422,
                  longitude: -0.11811217518,
                  pathAttribute: {
                    $type:
                      'Tfl.Api.Presentation.Entities.PathAttribute, Tfl.Api.Presentation.Entities',
                  },
                  descriptionHeading: 'Turn right',
                  trackType: 'None',
                },
                {
                  $type:
                    'Tfl.Api.Presentation.Entities.InstructionStep, Tfl.Api.Presentation.Entities',
                  description: 'for 15 metres',
                  turnDirection: 'LEFT',
                  streetName: '',
                  distance: 15,
                  cumulativeDistance: 526,
                  skyDirection: 19,
                  skyDirectionDescription: 'North',
                  cumulativeTravelTime: 472,
                  latitude: 51.46527875972,
                  longitude: -0.1154982901,
                  pathAttribute: {
                    $type:
                      'Tfl.Api.Presentation.Entities.PathAttribute, Tfl.Api.Presentation.Entities',
                  },
                  descriptionHeading: 'Turn left',
                  trackType: 'None',
                },
              ],
            },
            obstacles: [],
            departureTime: '2023-02-28T16:53:00',
            arrivalTime: '2023-02-28T17:00:00',
            departurePoint: {
              $type:
                'Tfl.Api.Presentation.Entities.StopPoint, Tfl.Api.Presentation.Entities',
              platformName: '',
              icsCode: '99999997',
              commonName: 'SW9 9QH',
              placeType: 'StopPoint',
              additionalProperties: [],
              lat: 51.466237247319995,
              lon: -0.11862619602,
            },
            arrivalPoint: {
              $type:
                'Tfl.Api.Presentation.Entities.Place, Tfl.Api.Presentation.Entities',
              commonName: 'SW9 9SL',
              placeType: 'StopPoint',
              lat: 51.46534533348,
              lon: -0.11516441688000001,
            },
            path: {
              $type:
                'Tfl.Api.Presentation.Entities.JourneyPlanner.Path, Tfl.Api.Presentation.Entities',
              lineString:
                '[[51.46623724732, -0.11862619602],[51.46616292416, -0.11882288419],[51.46669835326, -0.11934149672],[51.46753292422, -0.11811217518],[51.46747808047, -0.11805684116],[51.46701098346, -0.11752895537],[51.46691028204, -0.11741792022],[51.46659988372, -0.11712835121],[51.46635331568, -0.11689374725],[51.46588829392, -0.11649537478],[51.46583414286, -0.11648320749],[51.46570601821, -0.11634451255],[51.46560369748, -0.11613277039],[51.46527875972, -0.1154982901],[51.46540502896, -0.11542253333],[51.46534533348, -0.11516441688]]',
              stopPoints: [],
              elevation: [],
            },
            routeOptions: [
              {
                $type:
                  'Tfl.Api.Presentation.Entities.JourneyPlanner.RouteOption, Tfl.Api.Presentation.Entities',
                name: '',
                directions: [''],
                direction: '',
              },
            ],
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
            distance: 525.0,
            isDisrupted: false,
            hasFixedLocations: false,
            scheduledDepartureTime: '2023-02-28T16:53:00',
            scheduledArrivalTime: '2023-02-28T17:00:00',
          },
        ],
      },
    ],
    lines: [
      {
        $type:
          'Tfl.Api.Presentation.Entities.Line, Tfl.Api.Presentation.Entities',
        id: '322',
        name: '322',
        modeName: 'bus',
        disruptions: [],
        created: '2023-02-21T16:09:49.303Z',
        modified: '2023-02-21T16:09:49.303Z',
        lineStatuses: [
          {
            $type:
              'Tfl.Api.Presentation.Entities.LineStatus, Tfl.Api.Presentation.Entities',
            id: 0,
            lineId: '322',
            statusSeverity: 0,
            statusSeverityDescription: 'Special Service',
            reason:
              'ATLANTIC ROAD, SW9; Route 322 is on diversion in both directions between 08:00 Monday 27 February until 18:00 Friday 24 March due to carriageway works. Buses are diverted via Dulwich Road and Effra Road, missing stops between Regent Road and Brixton Station.',
            created: '0001-01-01T00:00:00',
            validityPeriods: [
              {
                $type:
                  'Tfl.Api.Presentation.Entities.ValidityPeriod, Tfl.Api.Presentation.Entities',
                fromDate: '2023-02-27T08:00:00Z',
                toDate: '2023-03-24T18:00:00Z',
                isNow: false,
              },
            ],
            disruption: {
              $type:
                'Tfl.Api.Presentation.Entities.Disruption, Tfl.Api.Presentation.Entities',
              category: 'PlannedWork',
              categoryDescription: 'PlannedWork',
              description:
                'ATLANTIC ROAD, SW9; Route 322 is on diversion in both directions between 08:00 Monday 27 February until 18:00 Friday 24 March due to carriageway works. Buses are diverted via Dulwich Road and Effra Road, missing stops between Regent Road and Brixton Station.',
              created: '2023-02-22T13:38:00Z',
              affectedRoutes: [],
              affectedStops: [],
            },
          },
        ],
        routeSections: [],
        serviceTypes: [
          {
            $type:
              'Tfl.Api.Presentation.Entities.LineServiceTypeInfo, Tfl.Api.Presentation.Entities',
            name: 'Regular',
            uri: '/Line/Route?ids=322&serviceTypes=Regular',
          },
        ],
        crowding: {
          $type:
            'Tfl.Api.Presentation.Entities.Crowding, Tfl.Api.Presentation.Entities',
        },
      },
    ],
    stopMessages: [],
    recommendedMaxAgeMinutes: 5,
    searchCriteria: {
      $type:
        'Tfl.Api.Presentation.Entities.JourneyPlanner.SearchCriteria, Tfl.Api.Presentation.Entities',
      dateTime: '2023-02-28T16:53:00',
      dateTimeType: 'Departing',
      timeAdjustments: {
        $type:
          'Tfl.Api.Presentation.Entities.JourneyPlanner.TimeAdjustments, Tfl.Api.Presentation.Entities',
        earliest: {
          $type:
            'Tfl.Api.Presentation.Entities.JourneyPlanner.TimeAdjustment, Tfl.Api.Presentation.Entities',
          date: '20230228',
          time: '0300',
          timeIs: 'departing',
          uri: '/journey/journeyresults/sw99qh/to/sw99sl?accessibilitypreference=stepfreetovehicle%0a&app_key=3adf942d451a48d08cae4f7113fa1a9a&time=0300&date=20230228&timeIs=departing',
        },
        earlier: {
          $type:
            'Tfl.Api.Presentation.Entities.JourneyPlanner.TimeAdjustment, Tfl.Api.Presentation.Entities',
          date: '20230228',
          time: '1653',
          timeIs: 'departing',
          uri: '/journey/journeyresults/sw99qh/to/sw99sl?accessibilitypreference=stepfreetovehicle%0a&app_key=3adf942d451a48d08cae4f7113fa1a9a&time=1653&date=20230228&timeIs=departing',
        },
        later: {
          $type:
            'Tfl.Api.Presentation.Entities.JourneyPlanner.TimeAdjustment, Tfl.Api.Presentation.Entities',
          date: '20230228',
          time: '1705',
          timeIs: 'departing',
          uri: '/journey/journeyresults/sw99qh/to/sw99sl?accessibilitypreference=stepfreetovehicle%0a&app_key=3adf942d451a48d08cae4f7113fa1a9a&time=1705&date=20230228&timeIs=departing',
        },
        latest: {
          $type:
            'Tfl.Api.Presentation.Entities.JourneyPlanner.TimeAdjustment, Tfl.Api.Presentation.Entities',
          date: '20230301',
          time: '0300',
          timeIs: 'departing',
          uri: '/journey/journeyresults/sw99qh/to/sw99sl?accessibilitypreference=stepfreetovehicle%0a&app_key=3adf942d451a48d08cae4f7113fa1a9a&time=0300&date=20230301&timeIs=departing',
        },
      },
    },
    journeyVector: {
      $type:
        'Tfl.Api.Presentation.Entities.JourneyPlanner.JourneyVector, Tfl.Api.Presentation.Entities',
      from: 'sw99qh',
      to: 'sw99sl',
      via: '',
      uri: '/journey/journeyresults/sw99qh/to/sw99sl?accessibilitypreference=stepfreetovehicle%0a&app_key=3adf942d451a48d08cae4f7113fa1a9a',
    },
  },
};

const mockOutput = {
  journeys: [
    {
      $type:
        'Tfl.Api.Presentation.Entities.JourneyPlanner.Journey, Tfl.Api.Presentation.Entities',
      startDateTime: '2023-02-28T17:05:00',
      duration: 8,
      arrivalDateTime: '2023-02-28T17:13:00',
      legs: [
        {
          $type:
            'Tfl.Api.Presentation.Entities.JourneyPlanner.Leg, Tfl.Api.Presentation.Entities',
          duration: 5,
          instruction: {
            $type:
              'Tfl.Api.Presentation.Entities.Instruction, Tfl.Api.Presentation.Entities',
            summary: 'Walk to Stockwell Green',
            detailed: 'Walk to Stockwell Green',
            steps: [
              {
                $type:
                  'Tfl.Api.Presentation.Entities.InstructionStep, Tfl.Api.Presentation.Entities',
                description: 'Burgoyne Road for 70 metres',
                turnDirection: 'STRAIGHT',
                streetName: 'Burgoyne Road',
                distance: 70,
                cumulativeDistance: 70,
                skyDirection: 327,
                skyDirectionDescription: 'NorthWest',
                cumulativeTravelTime: 63,
                latitude: 51.4661593686,
                longitude: -0.11881656326,
                pathAttribute: {
                  $type:
                    'Tfl.Api.Presentation.Entities.PathAttribute, Tfl.Api.Presentation.Entities',
                },
                descriptionHeading: 'Continue along ',
                trackType: 'None',
              },
              {
                $type:
                  'Tfl.Api.Presentation.Entities.InstructionStep, Tfl.Api.Presentation.Entities',
                description: 'on to Combermere Road, continue for 126 metres',
                turnDirection: 'RIGHT',
                streetName: 'Combermere Road',
                distance: 126,
                cumulativeDistance: 196,
                skyDirection: 41,
                skyDirectionDescription: 'NorthEast',
                cumulativeTravelTime: 176,
                latitude: 51.46669835326,
                longitude: -0.11934149672,
                pathAttribute: {
                  $type:
                    'Tfl.Api.Presentation.Entities.PathAttribute, Tfl.Api.Presentation.Entities',
                },
                descriptionHeading: 'Turn right',
                trackType: 'None',
              },
              {
                $type:
                  'Tfl.Api.Presentation.Entities.InstructionStep, Tfl.Api.Presentation.Entities',
                description: 'on to Stockwell Road, continue for 106 metres',
                turnDirection: 'LEFT',
                streetName: 'Stockwell Road',
                distance: 106,
                cumulativeDistance: 302,
                skyDirection: 323,
                skyDirectionDescription: 'NorthWest',
                cumulativeTravelTime: 274,
                latitude: 51.46753292422,
                longitude: -0.11811217518,
                pathAttribute: {
                  $type:
                    'Tfl.Api.Presentation.Entities.PathAttribute, Tfl.Api.Presentation.Entities',
                },
                descriptionHeading: 'Turn left',
                trackType: 'None',
              },
            ],
          },
          obstacles: [],
          departureTime: '2023-02-28T17:05:00',
          arrivalTime: '2023-02-28T17:10:00',
          departurePoint: {
            $type:
              'Tfl.Api.Presentation.Entities.StopPoint, Tfl.Api.Presentation.Entities',
            platformName: '',
            icsCode: '99999997',
            commonName: 'SW9 9QH',
            placeType: 'StopPoint',
            additionalProperties: [],
            lat: 51.466237247319995,
            lon: -0.11862619602,
          },
          arrivalPoint: {
            $type:
              'Tfl.Api.Presentation.Entities.StopPoint, Tfl.Api.Presentation.Entities',
            naptanId: '490G00012833',
            platformName: '',
            stopLetter: '->SE',
            icsCode: '1012833',
            individualStopId: '490012833S1',
            commonName: 'Stockwell Green',
            placeType: 'StopPoint',
            additionalProperties: [],
            lat: 51.46837193492,
            lon: -0.11884074305999999,
          },
          path: {
            $type:
              'Tfl.Api.Presentation.Entities.JourneyPlanner.Path, Tfl.Api.Presentation.Entities',
            lineString:
              '[[51.46623724732, -0.11862619602],[51.4661593686, -0.11881656326],[51.46669835326, -0.11934149672],[51.46753292422, -0.11811217518],[51.46768869961, -0.11829293596],[51.46795346916, -0.11854120313],[51.46812698636, -0.11870683938],[51.46836387168, -0.11889866639]]',
            stopPoints: [],
            elevation: [],
          },
          routeOptions: [
            {
              $type:
                'Tfl.Api.Presentation.Entities.JourneyPlanner.RouteOption, Tfl.Api.Presentation.Entities',
              name: '',
              directions: [''],
              direction: '',
            },
          ],
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
          distance: 302.0,
          isDisrupted: false,
          hasFixedLocations: true,
          scheduledDepartureTime: '2023-02-28T17:05:00',
          scheduledArrivalTime: '2023-02-28T17:10:00',
        },
        {
          $type:
            'Tfl.Api.Presentation.Entities.JourneyPlanner.Leg, Tfl.Api.Presentation.Entities',
          duration: 2,
          instruction: {
            $type:
              'Tfl.Api.Presentation.Entities.Instruction, Tfl.Api.Presentation.Entities',
            summary: '322 bus to Brixton Academy',
            detailed: '322 bus towards Crystal Palace',
            steps: [],
          },
          obstacles: [],
          departureTime: '2023-02-28T17:10:00',
          arrivalTime: '2023-02-28T17:12:00',
          departurePoint: {
            $type:
              'Tfl.Api.Presentation.Entities.StopPoint, Tfl.Api.Presentation.Entities',
            naptanId: '490G00012833',
            platformName: '',
            stopLetter: '->SE',
            icsCode: '1012833',
            individualStopId: '490012833S1',
            commonName: 'Stockwell Green',
            placeType: 'StopPoint',
            additionalProperties: [],
            lat: 51.46837193492,
            lon: -0.11884074305999999,
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
            lat: 51.465237725,
            lon: -0.11518324797,
          },
          path: {
            $type:
              'Tfl.Api.Presentation.Entities.JourneyPlanner.Path, Tfl.Api.Presentation.Entities',
            lineString:
              '[[51.46835581664, -0.11889184844],[51.46812698636, -0.11870683938],[51.46795346916, -0.11854120313],[51.46768869961, -0.11829293596],[51.46753292422, -0.11811217518],[51.46747808047, -0.11805684116],[51.46701098346, -0.11752895537],[51.46691028204, -0.11741792022],[51.46659988372, -0.11712835121],[51.46635331568, -0.11689374725],[51.46630319283, -0.11685080782],[51.46630319283, -0.11685080782],[51.46588829392, -0.11649537478],[51.46583414286, -0.11648320749],[51.46570601821, -0.11634451255],[51.46560369748, -0.11613277039],[51.46527875972, -0.1154982901],[51.46516894852, -0.11526691103]]',
            stopPoints: [
              {
                $type:
                  'Tfl.Api.Presentation.Entities.Identifier, Tfl.Api.Presentation.Entities',
                id: '490G00012578',
                name: 'Stansfield Road',
                uri: '/StopPoint/490G00012578',
                type: 'StopPoint',
                routeType: 'Unknown',
                status: 'Unknown',
              },
              {
                $type:
                  'Tfl.Api.Presentation.Entities.Identifier, Tfl.Api.Presentation.Entities',
                id: '490G00007526',
                name: 'Brixton Academy',
                uri: '/StopPoint/490G00007526',
                type: 'StopPoint',
                routeType: 'Unknown',
                status: 'Unknown',
              },
            ],
            elevation: [],
          },
          routeOptions: [
            {
              $type:
                'Tfl.Api.Presentation.Entities.JourneyPlanner.RouteOption, Tfl.Api.Presentation.Entities',
              name: '322',
              directions: ['Crystal Palace'],
              lineIdentifier: {
                $type:
                  'Tfl.Api.Presentation.Entities.Identifier, Tfl.Api.Presentation.Entities',
                id: '322',
                name: '322',
                uri: '/Line/322',
                type: 'Line',
                crowding: {
                  $type:
                    'Tfl.Api.Presentation.Entities.Crowding, Tfl.Api.Presentation.Entities',
                },
                routeType: 'Unknown',
                status: 'Unknown',
              },
              direction: 'Inbound',
            },
          ],
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
          disruptions: [
            {
              $type:
                'Tfl.Api.Presentation.Entities.Disruption, Tfl.Api.Presentation.Entities',
              category: 'PlannedWork',
              type: 'lineInfo',
              categoryDescription: 'PlannedWork',
              description:
                'ATLANTIC ROAD, SW9; Route 322 is on diversion in both directions between 08:00 Monday 27 February until 18:00 Friday 24 March due to carriageway works. Buses are diverted via Dulwich Road and Effra Road, missing stops between Regent Road and Brixton Station.',
              summary: 'ATLANTIC ROAD, SW9 - SO23/37388 - ROUTE 322',
              additionalInfo: '',
              created: '2023-02-22T13:38:00',
              lastUpdate: '2023-02-22T13:42:00',
            },
          ],
          plannedWorks: [],
          isDisrupted: true,
          hasFixedLocations: true,
          scheduledDepartureTime: '2023-02-28T17:10:00',
          scheduledArrivalTime: '2023-02-28T17:12:00',
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
            steps: [
              {
                $type:
                  'Tfl.Api.Presentation.Entities.InstructionStep, Tfl.Api.Presentation.Entities',
                description: 'Stockwell Road for 20 metres',
                turnDirection: 'STRAIGHT',
                streetName: 'Stockwell Road',
                distance: 20,
                cumulativeDistance: 20,
                skyDirection: 306,
                skyDirectionDescription: 'NorthWest',
                cumulativeTravelTime: 18,
                latitude: 51.46517620621,
                longitude: -0.11527216443,
                pathAttribute: {
                  $type:
                    'Tfl.Api.Presentation.Entities.PathAttribute, Tfl.Api.Presentation.Entities',
                },
                descriptionHeading: 'Continue along ',
                trackType: 'None',
              },
              {
                $type:
                  'Tfl.Api.Presentation.Entities.InstructionStep, Tfl.Api.Presentation.Entities',
                description: 'for 15 metres',
                turnDirection: 'RIGHT',
                streetName: '',
                distance: 15,
                cumulativeDistance: 35,
                skyDirection: 19,
                skyDirectionDescription: 'North',
                cumulativeTravelTime: 30,
                latitude: 51.46527875972,
                longitude: -0.1154982901,
                pathAttribute: {
                  $type:
                    'Tfl.Api.Presentation.Entities.PathAttribute, Tfl.Api.Presentation.Entities',
                },
                descriptionHeading: 'Turn right',
                trackType: 'None',
              },
            ],
          },
          obstacles: [],
          departureTime: '2023-02-28T17:12:00',
          arrivalTime: '2023-02-28T17:13:00',
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
            lat: 51.465237725,
            lon: -0.11518324797,
          },
          arrivalPoint: {
            $type:
              'Tfl.Api.Presentation.Entities.Place, Tfl.Api.Presentation.Entities',
            commonName: 'SW9 9SL',
            placeType: 'StopPoint',
            lat: 51.46534533348,
            lon: -0.11516441688000001,
          },
          path: {
            $type:
              'Tfl.Api.Presentation.Entities.JourneyPlanner.Path, Tfl.Api.Presentation.Entities',
            lineString:
              '[[51.46517620621, -0.11527216443],[51.46527875972, -0.1154982901],[51.4654034165, -0.11542116938],[51.46534533348, -0.11516441688]]',
            stopPoints: [],
            elevation: [],
          },
          routeOptions: [
            {
              $type:
                'Tfl.Api.Presentation.Entities.JourneyPlanner.RouteOption, Tfl.Api.Presentation.Entities',
              name: '',
              directions: [''],
              direction: '',
            },
          ],
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
          distance: 35.0,
          isDisrupted: false,
          hasFixedLocations: false,
          scheduledDepartureTime: '2023-02-28T17:12:00',
          scheduledArrivalTime: '2023-02-28T17:13:00',
        },
      ],
      fare: {
        $type:
          'Tfl.Api.Presentation.Entities.JourneyPlanner.JourneyFare, Tfl.Api.Presentation.Entities',
        totalCost: 165,
        fares: [
          {
            $type:
              'Tfl.Api.Presentation.Entities.JourneyPlanner.Fare, Tfl.Api.Presentation.Entities',
            lowZone: 0,
            highZone: 0,
            cost: 165,
            isHopperFare: false,
            peak: 0,
            offPeak: 0,
            taps: [
              {
                $type:
                  'Tfl.Api.Presentation.Entities.JourneyPlanner.FareTap, Tfl.Api.Presentation.Entities',
                atcoCode: '490G00012833',
                tapDetails: {
                  $type:
                    'Tfl.Api.Presentation.Entities.JourneyPlanner.FareTapDetails, Tfl.Api.Presentation.Entities',
                  modeType: 'Bus',
                  validationType: 'Entry',
                  hostDeviceType: 'ETM',
                  busRouteId: '322',
                  nationalLocationCode: 0,
                  tapTimestamp: '2023-02-28T17:10:00+00:00',
                },
              },
            ],
          },
        ],
        caveats: [
          {
            $type:
              'Tfl.Api.Presentation.Entities.JourneyPlanner.FareCaveat, Tfl.Api.Presentation.Entities',
            text: 'The price shown is a single adult pay as you go fare.',
            type: 'generic',
          },
        ],
      },
    },
    {
      $type:
        'Tfl.Api.Presentation.Entities.JourneyPlanner.Journey, Tfl.Api.Presentation.Entities',
      startDateTime: '2023-02-28T16:53:00',
      duration: 7,
      arrivalDateTime: '2023-02-28T17:00:00',
      legs: [
        {
          $type:
            'Tfl.Api.Presentation.Entities.JourneyPlanner.Leg, Tfl.Api.Presentation.Entities',
          duration: 7,
          instruction: {
            $type:
              'Tfl.Api.Presentation.Entities.Instruction, Tfl.Api.Presentation.Entities',
            summary: 'Walk to SW9 9SL',
            detailed: 'Walk to SW9 9SL',
            steps: [
              {
                $type:
                  'Tfl.Api.Presentation.Entities.InstructionStep, Tfl.Api.Presentation.Entities',
                description: 'Burgoyne Road for 70 metres',
                turnDirection: 'STRAIGHT',
                streetName: 'Burgoyne Road',
                distance: 70,
                cumulativeDistance: 70,
                skyDirection: 327,
                skyDirectionDescription: 'NorthWest',
                cumulativeTravelTime: 63,
                latitude: 51.4661593686,
                longitude: -0.11881656326,
                pathAttribute: {
                  $type:
                    'Tfl.Api.Presentation.Entities.PathAttribute, Tfl.Api.Presentation.Entities',
                },
                descriptionHeading: 'Continue along ',
                trackType: 'None',
              },
              {
                $type:
                  'Tfl.Api.Presentation.Entities.InstructionStep, Tfl.Api.Presentation.Entities',
                description: 'on to Combermere Road, continue for 126 metres',
                turnDirection: 'RIGHT',
                streetName: 'Combermere Road',
                distance: 126,
                cumulativeDistance: 196,
                skyDirection: 41,
                skyDirectionDescription: 'NorthEast',
                cumulativeTravelTime: 176,
                latitude: 51.46669835326,
                longitude: -0.11934149672,
                pathAttribute: {
                  $type:
                    'Tfl.Api.Presentation.Entities.PathAttribute, Tfl.Api.Presentation.Entities',
                },
                descriptionHeading: 'Turn right',
                trackType: 'None',
              },
              {
                $type:
                  'Tfl.Api.Presentation.Entities.InstructionStep, Tfl.Api.Presentation.Entities',
                description: 'on to Stockwell Road, continue for 315 metres',
                turnDirection: 'RIGHT',
                streetName: 'Stockwell Road',
                distance: 315,
                cumulativeDistance: 511,
                skyDirection: 146,
                skyDirectionDescription: 'SouthEast',
                cumulativeTravelTime: 458,
                latitude: 51.46753292422,
                longitude: -0.11811217518,
                pathAttribute: {
                  $type:
                    'Tfl.Api.Presentation.Entities.PathAttribute, Tfl.Api.Presentation.Entities',
                },
                descriptionHeading: 'Turn right',
                trackType: 'None',
              },
              {
                $type:
                  'Tfl.Api.Presentation.Entities.InstructionStep, Tfl.Api.Presentation.Entities',
                description: 'for 15 metres',
                turnDirection: 'LEFT',
                streetName: '',
                distance: 15,
                cumulativeDistance: 526,
                skyDirection: 19,
                skyDirectionDescription: 'North',
                cumulativeTravelTime: 472,
                latitude: 51.46527875972,
                longitude: -0.1154982901,
                pathAttribute: {
                  $type:
                    'Tfl.Api.Presentation.Entities.PathAttribute, Tfl.Api.Presentation.Entities',
                },
                descriptionHeading: 'Turn left',
                trackType: 'None',
              },
            ],
          },
          obstacles: [],
          departureTime: '2023-02-28T16:53:00',
          arrivalTime: '2023-02-28T17:00:00',
          departurePoint: {
            $type:
              'Tfl.Api.Presentation.Entities.StopPoint, Tfl.Api.Presentation.Entities',
            platformName: '',
            icsCode: '99999997',
            commonName: 'SW9 9QH',
            placeType: 'StopPoint',
            additionalProperties: [],
            lat: 51.466237247319995,
            lon: -0.11862619602,
          },
          arrivalPoint: {
            $type:
              'Tfl.Api.Presentation.Entities.Place, Tfl.Api.Presentation.Entities',
            commonName: 'SW9 9SL',
            placeType: 'StopPoint',
            lat: 51.46534533348,
            lon: -0.11516441688000001,
          },
          path: {
            $type:
              'Tfl.Api.Presentation.Entities.JourneyPlanner.Path, Tfl.Api.Presentation.Entities',
            lineString:
              '[[51.46623724732, -0.11862619602],[51.46616292416, -0.11882288419],[51.46669835326, -0.11934149672],[51.46753292422, -0.11811217518],[51.46747808047, -0.11805684116],[51.46701098346, -0.11752895537],[51.46691028204, -0.11741792022],[51.46659988372, -0.11712835121],[51.46635331568, -0.11689374725],[51.46588829392, -0.11649537478],[51.46583414286, -0.11648320749],[51.46570601821, -0.11634451255],[51.46560369748, -0.11613277039],[51.46527875972, -0.1154982901],[51.46540502896, -0.11542253333],[51.46534533348, -0.11516441688]]',
            stopPoints: [],
            elevation: [],
          },
          routeOptions: [
            {
              $type:
                'Tfl.Api.Presentation.Entities.JourneyPlanner.RouteOption, Tfl.Api.Presentation.Entities',
              name: '',
              directions: [''],
              direction: '',
            },
          ],
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
          distance: 525.0,
          isDisrupted: false,
          hasFixedLocations: false,
          scheduledDepartureTime: '2023-02-28T16:53:00',
          scheduledArrivalTime: '2023-02-28T17:00:00',
        },
      ],
    },
  ],
  lines: [
    {
      $type:
        'Tfl.Api.Presentation.Entities.Line, Tfl.Api.Presentation.Entities',
      id: '322',
      name: '322',
      modeName: 'bus',
      disruptions: [],
      created: '2023-02-21T16:09:49.303Z',
      modified: '2023-02-21T16:09:49.303Z',
      lineStatuses: [
        {
          $type:
            'Tfl.Api.Presentation.Entities.LineStatus, Tfl.Api.Presentation.Entities',
          id: 0,
          lineId: '322',
          statusSeverity: 0,
          statusSeverityDescription: 'Special Service',
          reason:
            'ATLANTIC ROAD, SW9; Route 322 is on diversion in both directions between 08:00 Monday 27 February until 18:00 Friday 24 March due to carriageway works. Buses are diverted via Dulwich Road and Effra Road, missing stops between Regent Road and Brixton Station.',
          created: '0001-01-01T00:00:00',
          validityPeriods: [
            {
              $type:
                'Tfl.Api.Presentation.Entities.ValidityPeriod, Tfl.Api.Presentation.Entities',
              fromDate: '2023-02-27T08:00:00Z',
              toDate: '2023-03-24T18:00:00Z',
              isNow: false,
            },
          ],
          disruption: {
            $type:
              'Tfl.Api.Presentation.Entities.Disruption, Tfl.Api.Presentation.Entities',
            category: 'PlannedWork',
            categoryDescription: 'PlannedWork',
            description:
              'ATLANTIC ROAD, SW9; Route 322 is on diversion in both directions between 08:00 Monday 27 February until 18:00 Friday 24 March due to carriageway works. Buses are diverted via Dulwich Road and Effra Road, missing stops between Regent Road and Brixton Station.',
            created: '2023-02-22T13:38:00Z',
            affectedRoutes: [],
            affectedStops: [],
          },
        },
      ],
      routeSections: [],
      serviceTypes: [
        {
          $type:
            'Tfl.Api.Presentation.Entities.LineServiceTypeInfo, Tfl.Api.Presentation.Entities',
          name: 'Regular',
          uri: '/Line/Route?ids=322&serviceTypes=Regular',
        },
      ],
      crowding: {
        $type:
          'Tfl.Api.Presentation.Entities.Crowding, Tfl.Api.Presentation.Entities',
      },
    },
  ],
};
module.exports = { mockResponse, mockOutput };
