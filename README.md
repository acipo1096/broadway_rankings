# Broadway Rankings

## Description

An application that ranks Broadway performances based on predetermined criteria. Built with HTML, CSS, JavaScript, Bootstrap 5, NodeJS/Express, and MongoDB.

To view a demo of this application, click [here](https://youtu.be/Lwzxi3RoVZc).

## History/Motivation

I've seen over 70 Broadway musicals and plays since 2016, and I'm often asked what my favorite shows are. I find it gets harder and harder to rank them because there are many considerations: Did I like the story? Could I relate to the characters? Were the songs well-written? Was my attention held for most of the performance?

## Usage

The list of shows I've seen (stored in a MongoDB document) is displayed in order from highest-to-lowest ranked.

To rank each performance, I sat down and came up with a list of criteria I felt were important to consider:

- **Songs/Dialogue:** Did I like the songs? Were they well written? If this was a play with no music, did I enjoy the dialogue?
- **Plot:** Was this a good story? Were the characters well-written? Could I easily understand what was going on?
- **Cast:** Did the actors put on a good performance? Was each member well-cast to his, her, or their character?
- **Amount My Attention was Held**: Did I fall asleep or feel bored?
- **Technical Effects:** Were the technical effects good, or were they incredible?
- **Originality:** Was this a Broadway verison of a movie, a revival, or a new, original story?
- **Memorability:** Did I easily forget what happened the next day?
- **Gut Feeling:** If two rankings were similar, which show did I feel was actually better?

After seeing a performance, I enter the show's name and my rankings using a sliding 10-point scale for each criterion. (I also collect the date I saw the show and the location, but it doesn't display on the front end.) 


## Conclusion

This app ranks my choices pretty accurately. I do notice that some shows are ranked slightly higher or lower than they should be, but adjusting the "Gut Ranking" in MongoDB will easily fix this issue.

In the future, I may try to add pagination to make the UI cleaner to view.



