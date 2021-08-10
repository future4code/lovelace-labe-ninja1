import React from 'react';
import axios from "axios";
import styled from 'styled-components';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';




const MainContainer = styled.div`
display: flex;
flex-direction: column;
align-items: center;
-webkit-box-shadow: 7px 7px 15px 1px rgba(0,0,0,0.79); 
box-shadow: 7px 7px 15px 1px rgba(0,0,0,0.79);
margin-top: 20px;
`


const useStyles = theme => ({
    root: {
        minWidth: 275,
      },
      bullet: {
        display: 'inline-block',
        margin: '0 2px',
        transform: 'scale(0.8)',
      },
      title: {
        fontSize: 14,
      },
      pos: {
        marginBottom: 12,
      },
      
});




class CardServico extends React.Component {
        


    setProductDetails = () => {
        this.props.changeScene('detalhe');
        this.props.showProduct(this.props.servico)
    }
    
    render() {
        const { classes } = this.props;
        const bull = <span className={classes.bullet}>•</span>

        console.log(this.props)
        return (


            <Card className={classes.root} variant="outlined" color="primary" >

        <CardContent >
                    <h3> {this.props.servico.title} </h3>
                    <p>R$: 
                    {this.props.servico.price}
                    </p>
                    <p>
                    {this.props.servico.dueDate}
                    </p>
                
                    <CardActions>
                        <Button onClick={this.setProductDetails} variant="outlined" >Ver detalhes</Button>
                        <Button onClick={() => this.props.updateProducts(this.props.servico)} variant="outlined">Adicionar ao carrinho</Button>
                    </CardActions>
            </CardContent>

            </Card>
        );
    }
}

export default withStyles(useStyles)(CardServico)
