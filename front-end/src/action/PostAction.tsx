import {FETCH_BUTTON_CLICKED} from './types';

export const PostAction = () => { // action creator

    // action
    return {
        type: FETCH_BUTTON_CLICKED, // description of the action.
        payload: [
            {
                userId: 1,
                id: 1,
                title: "Title 01",
                body: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. " +
                    "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, " +
                    "when an unknown printer took a galley of type and scrambled it to make a type specimen book."
            }, {
                userId: 2,
                id: 2,
                title: "Title 02",
                body: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. " +
                    "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, " +
                    "when an unknown printer took a galley of type and scrambled it to make a type specimen book."
            },
            {
                userId: 3,
                id: 3,
                title: "Title 03",
                body: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. " +
                    "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, " +
                    "when an unknown printer took a galley of type and scrambled it to make a type specimen book."
            },
            {
                userId: 4,
                id: 4,
                title: "Title 04",
                body: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. " +
                    "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, " +
                    "when an unknown printer took a galley of type and scrambled it to make a type specimen book."
            },

        ]
    }
};