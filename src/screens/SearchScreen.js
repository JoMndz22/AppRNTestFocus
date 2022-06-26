import { ScrollView, StyleSheet, Text, View } from 'react-native';
import React, { useEffect, useState } from 'react';
import Spinner from 'react-native-loading-spinner-overlay/lib';
import { GET } from '../services/API';
import { API_KEY } from '../config';
import CardMovie from '../organisms/CardMovie';
import P from '../organisms/P';


const SearchScreen = (props) => {

    let movie = props.route.params.movie;
    const { navigation } = props;
    const [spinner, setSpinner] = useState(true);
    const [movies, setMovies] = useState([]);

    useEffect(() => {

        const data = async () => {
            const response = await GET(`/search/movie?api_key=${API_KEY}&query=${movie}`, true);
            setMovies(response.results);

        }

        data();


    }, []);


    return (
        <ScrollView>
            <View style={styles.container}>
                <View style={styles.theme}>
                    <P txtColor={'#7d7d7d'} fSize={20}>Results for: '{movie}'</P>
                </View>

                {
                    movies.map((data, index) => {

                        return (
                            <CardMovie
                                key={index}
                                id={data.id}
                                navigation={navigation}
                                image={data.backdrop_path}
                                title={data.original_title}
                                category={data.genre_ids}
                                date={data.release_date}
                                ranking={data.popularity}
                                description={data.overview}
                            />
                        )
                    })
                }
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 25,
        backgroundColor: '#fff',
        paddingVertical: 35
    },
    theme: {
        marginBottom: 20
    }
})

export default SearchScreen
