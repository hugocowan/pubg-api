IndexCtrl.$inject = ['$http'];

function IndexCtrl($http){
  this.telemetry = [];
  this.message = 'Nothing yet';
  // this.filteredData = [];

  const getTelemetry = () => {
    this.message = 'GET request Sent';
    $http({
      method: 'GET',
      url: 'https://telemetry-cdn.playbattlegrounds.com/bluehole-pubg/pc-eu/2018/05/03/19/31/8bc98ca4-4f08-11e8-bcc0-0a586476ee08-telemetry.json',
      headers: {
        // Authorization: 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJqdGkiOiIwOGM0YTE5MC0yZjU3LTAxMzYtYjVmZi0wMzFiMjkwNGZkOGQiLCJpc3MiOiJnYW1lbG9ja2VyIiwiaWF0IjoxNTI1MTY5OTU5LCJwdWIiOiJibHVlaG9sZSIsInRpdGxlIjoicHViZyIsImFwcCI6InB1YmctdHJhY2tlci10aGluZ3kiLCJzY29wZSI6ImNvbW11bml0eSIsImxpbWl0IjoxMH0.Iis9lpj0TTTzwpQTEK8cpQ2iSzBxLiMBW0j8Ovl1OGc',
        Accept: 'application/vnd.api+json'
      }
    })
      .then(res => {
        // console.log(res.data[0]);
        const filteredData = res.data.filter( data => {
          this.message = 'Filter is happening!';
          // console.log('data: ', data);
          if(!data.character) return false;
          if(data.character.name === 'boogaliwoogali'){
            return data;
          }
          this.message = 'GET Request Recieved';
        });

        this.telemetry = filteredData;
        console.log('telemetry: ',this.telemetry);
      });
  };

  getTelemetry();

  // const filter = this.telemetry.filter( function (data){
  //   this.message = 'Filter is happening!';
  //   if(data.character.name === 'boogaliwoogali'){
  //     return data;
  //   }
  // });
  //
  // this.filteredData = filter;
}
export default IndexCtrl;
