if (Meteor.isClient){
  var img_data = [
    {
      img_src: "mygear.jpg",
      img_alt: "my music gear"
    },

    {
      img_src: "kool.jpg",
      img_alt: "pic of me"
    },

    {
      img_src: "sip.jpg",
      img_alt: "logo"
    },

    ]

  Template.images.helpers({images: img_data});

  Template.images.events({

      'click .js-image': function(event){
      $(event.target).css("width", "50px");
    }
  });
}

if (Meteor.isServer){
	Meteor.startup(function(){
		// code to run on server at startup
    console.log(" I am the server")
	});
}