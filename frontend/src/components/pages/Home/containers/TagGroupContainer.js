import React, { Component, Fragment } from "react";
import client from "../../../../apollo/client";
import { Query } from "react-apollo";
import { MAJOR_TAGS, MINOR_TAGS } from "../../../../apollo/queries";
import { TagGroup } from "../components";

class TagGroupContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      tags: [],
      searchbar: ""
    };
  }

  handleSearchbarChange = e => {
    this.setState({
      searchbar: e.target.value
    });
  };

  componentDidMount() {
    const { type } = this.props;

    let query = null;
    if (type === "major") query = MAJOR_TAGS;
    else if (type === "minor") query = MINOR_TAGS;

    client.query({ query }).then(({ error, loading, data }) => {
      if (type === "major") {
        this.setState({
          tags: data.majorTags
        });
      } else {
        this.setState({
          tags: data.minorTags
        });
      }
    });
  }

  render() {
    const { title, type, onClick } = this.props;
    const { tags, searchbar } = this.state;

    return (
      <Fragment>
        <TagGroup
          title={title}
          tags={
            searchbar
              ? tags.map(tag => {
                  if (tag.name.match(searchbar)) {
                    tag = { ...tag, isFiltered: true };
                  }

                  return tag;
                })
              : tags
          }
          searchbar={type === "minor"}
          onClick={onClick}
          onChange={this.handleSearchbarChange}
        />
      </Fragment>
    );
  }
}

export default TagGroupContainer;
