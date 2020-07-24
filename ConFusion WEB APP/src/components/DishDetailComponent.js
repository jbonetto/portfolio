import React, { Component } from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle } from 'reactstrap';



class DishDetail extends Component {

    
    renderComments (comentario) {
        
       
        if(comentario != null) {
                      
            const coment= comentario.map(comento => {
            
                return(
                    
                    <li key={comento.id}>
                        <p>-- {comento.comment}</p>
                        <p>{comento.author}, {new Intl.DateTimeFormat('en-US', {year: 'numeric', month: 'short', day:'2-digit'}).format(new Date(Date.parse(comento.date)))}</p>
                    </li> 
                    
                );
                
            });
            return(coment);
        }else{
            return(
                <div></div>
            );
        }    

    }
   
    
    render() {
        
        if(this.props.plato != null) {

            return(
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-md-5 mt-1">
                            <Card>
                                <CardImg width="100%" src={this.props.plato.image} alt={this.props.plato.name} />
                                <CardBody>
                                    <CardTitle>{this.props.plato.name}</CardTitle>
                                    <CardText>{this.props.plato.description}</CardText>
                                </CardBody>
                            </Card>
                        </div>
                        <div className="col-12 col-md-5 mt-1">
                            <h4>Comments</h4>
                            
                            <ul className='list-unstyled'>
                                {this.renderComments(this.props.plato.comments)}
                            </ul>
                        </div>
                    </div>
                </div>
            );
        }else{
            return(<div></div>);
        }
    }
}



export default DishDetail;