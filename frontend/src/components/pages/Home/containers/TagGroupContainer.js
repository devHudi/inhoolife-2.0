import React from "react";
import { Query } from "react-apollo";
import { MAJOR_TAGS, MINOR_TAGS } from "../../../../apollo/queries";
import { TagGroup } from "../components";

const TagGroupContainer = ({ title, type, onClick }) => {
  let query = null;
  if (type === "major") query = MAJOR_TAGS;
  else if (type === "minor") query = MINOR_TAGS;

  return (
    <Query query={query}>
      {({ loading, data }) => {
        if (loading) return <div />;

        let tags = null;
        if (type === "major") tags = data.majorTags;
        else if (type === "minor") tags = data.minorTags;

        return <TagGroup title={title} tags={tags} onClick={onClick} />;
      }}
    </Query>
  );
};

export default TagGroupContainer;
