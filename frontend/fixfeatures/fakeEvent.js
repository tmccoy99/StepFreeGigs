let fakeEvents = JSON.stringify([{
  id: 1,
        eventName: "fake event",
        url: "http://fakeurl.com",
        date: '01/05/20023',
        priceRanges: '£10 - £15',
        venue: "fake venue",
        venueAddress: "fake adress",
        venuePostcode: "E1 7WS",
        distance: "7 miles",
},
{
  id: 2,
        eventName: "fake event2",
        url: "http://fakeurl2.com",
        date: '02/05/20023',
        priceRanges: '£20 - £25',
        venue: "fake venue2",
        venueAddress: "fake adress2",
        venuePostcode: "E4 7GS",
        distance: "7 miles",
},
{
  id: 3,
        eventName: "another fake event",
        url: "http://fakeurl.com",
        date: '01/05/20023',
        priceRanges: '£6 - £15',
        venue: "fake venue3",
        venueAddress: "fake adress",
        venuePostcode: "E1 7WS",
        distance: "9 miles",
},
{
  id: 4,
        eventName: "another fake event2",
        url: "http://randomurl.com",
        date: '01/05/20023',
        priceRanges: '£5 - £15',
        venue: "this place doesn't exist",
        venueAddress: "fake adress",
        venuePostcode: "E1 7WS",
        distance: "5 miles",
},
{
  id: 5,
        eventName: "another fake event3",
        url: "http://eventveryfake.com",
        date: '01/05/20023',
        priceRanges: '£10 - £15',
        venue: "this place doesn't exist 444",
        venueAddress: "another fake adress",
        venuePostcode: "E3 8BW",
        distance: "12 miles",
},
])

module.exports = fakeEvents;