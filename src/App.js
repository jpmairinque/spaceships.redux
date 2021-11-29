import GlobalStyle from './styles/global';
import {ApolloClient, InMemoryCache, ApolloProvider} from '@apollo/client'
import { AppRoutes } from './routes';

function App() {

  const client = new ApolloClient({
    cache: new InMemoryCache(),
    uri: "https://api.spacex.land/graphql/"
  })

  return (
    
      <div className="App">
        <ApolloProvider client={client}>
          <AppRoutes/>
          <GlobalStyle/>
        </ApolloProvider>
      </div>
  
  );
}

export default App;
