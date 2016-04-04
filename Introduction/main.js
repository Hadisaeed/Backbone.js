/**
 * Created by hadi on 4/5/2016.
 */
(function(){
    var Rectangle= Backbone.Model.extend({});
    var Rectangleview= Backbone.View.extend({

        tagName:'div',
        className:'rectangle',
        events:{
            'click':'move'
        },
        render:function(){

            this.setDimensions();
            this.setPosition();
            this.setColor();
            return this;


        },

        setDimensions:function(){
        this.$el.css({

            width:this.model.get('width') + 'px',
            height:this.model.get('height') + 'px'
        });
    },
        setPosition:function(){

            var position=this.model.get('position');
            this.$el.css({

                left:position.x,
                top:position.y

            })
        },

        setColor:function(){

            this.$el.css('background-color', this.model.get('color'));
        },

        move:function(){

            this.$el.css('left',this.$el.position().left + 80);
        }


    });
  /*  var r1=new Rectangle({
        width:100,
        height:80,
        color:'dimgray',
        position:{
            x:300,
            y:150
        }

    });
*/
    var models=[
      new Rectangle({
          width:100,
          height:80,
          color:'dimgray',
          position:{
              x:300,
              y:150
          }

      }),
        new Rectangle({
            width:300,
            height:70,
            color:'dimgray',
            position:{
                x:500,
                y:280
            }

        }),
        new Rectangle({
            width:150,
            height:150,
            color:'dimgray',
            position:{
                x:350,
                y:450
            }

        }),
    ];
    _(models).each(function(model){
        $('div#canvas').append(new Rectangleview({model:model}).render().el)
    })
  /*  var myView= new Rectangleview({model:r1});
    $('div#canvas').append(myView.render().el)
*/
})();