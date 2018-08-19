import React, { Component, Fragment } from "react";
import client from "../../../apollo/client";
import { MAJOR_TAGS, MINOR_TAGS, SAVE_TAGS } from "../../../apollo/queries";
import { TagList } from "../components";

class TagListContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      type: "major",
      tags: ""
    };
  }

  fetchTags = () => {
    const { type } = this.state;
    let query = null;

    if (type === "major") query = MAJOR_TAGS;
    else if (type === "minor") query = MINOR_TAGS;

    client
      .query({
        query,
        fetchPolicy: "network-only"
      })
      .then(({ error, loading, data }) => {
        let tags = null;

        if (type === "major") tags = data.majorTags;
        else if (type === "minor") tags = data.minorTags;

        this.setState({
          tags: tags.map(tag => tag.name).join(",")
        });
      });
  };

  saveTags = () => {
    const { tags, type } = this.state;
    const tagsString = '["' + tags.split(",").join('","') + '"]';

    const mutation = SAVE_TAGS(tagsString, type);
    client.mutate({
      mutation
    });
  };

  handleChange = e => {
    this.setState({
      tags: e.target.value
    });
  };

  handleClickSave = () => {
    this.saveTags();
  };

  componentWillReceiveProps(nextProps) {
    this.setState(
      {
        type: nextProps.type
      },
      () => this.fetchTags()
    );
  }

  componentDidMount() {
    this.fetchTags();
  }

  render() {
    const { tags } = this.state;
    return (
      <TagList
        tags={tags}
        onChange={this.handleChange}
        onClickSave={this.handleClickSave}
      />
    );
  }
}

export default TagListContainer;
