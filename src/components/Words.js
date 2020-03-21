import React, { useState, useEffect, useMemo } from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";

const DB_URL = "https://word-cloud-169be.firebaseio.com";

//datafetching..
export default function Words() {
  const [words, setWords] = useState(null);

  useEffect(() => {
    async function fetchData() {
      const res = await fetch(`${DB_URL}/words.json`);
      const body = await res.json();
      return body;
    }
    fetchData()
      .then(res => setWords(res))
      .catch(err => console.log(err));
  }, []);

  //컴포넌트가 업데이트가 되었을 때만 업데이트 하기
  const test = useMemo(() => setWords(words), [words]);

  console.log(test, "Memo?");
  return (
    <Card>
      {test
        ? test.map((word, i) => <CardContent key={i}>{word.word}</CardContent>)
        : words
        ? words.map((word, i) => (
            <CardContent key={i}>
              <Typography color="textSecondary" gutterBottom>
                가중치: {word.weight}
              </Typography>
              <Typography variant="h5" component="h2">
                {word.word}
              </Typography>
            </CardContent>
          ))
        : "Loading..."}
    </Card>
  );
}
