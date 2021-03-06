defmodule InstagramWeb.GraphQL.Schema do
  use Absinthe.Schema
  alias InstagramWeb.GraphQL.Resolvers
  alias InstagramWeb.GraphQL.Middleware

  import_types InstagramWeb.GraphQL.Types.PostsTypes
  import_types InstagramWeb.GraphQL.Types.AccountsTypes

  query do
    @desc "Get list of photo"
    field :photos, list_of(:photo) do
      middleware Middleware.Authorize
      resolve &Resolvers.Posts.photos/3
    end

    @desc "Get a single photo from his id"
    field :photo, :photo do
      arg :id, non_null(:id)
      resolve &Resolvers.Posts.photo/3
    end

    @desc "Get a presign url for upload an photo"
    field :presign_url, :presign_url do
      middleware Middleware.Authorize
      resolve &Resolvers.Posts.presign_url/3
    end

    @desc "Get all comments for a photo"
    field :comments, non_null(list_of(:comment)) do
      arg :photo_id, non_null(:id)
      middleware Middleware.Authorize
      resolve &Resolvers.Posts.get_comments/3
    end

    @desc "Search a tag by his name"
    field :search_tags, list_of(:tag) do
      arg :name, non_null(:string)
      resolve &Resolvers.Posts.search_tag/3
    end

    @desc "Get list of tag"
    field :tags, non_null(list_of(:tag)) do
      resolve &Resolvers.Posts.get_tags/3
    end
  end

  mutation do
    @desc "Login as a user"
    field :login, :user_session do
      arg :token, :string
      arg :provider, type: :provider
      resolve &Resolvers.Accounts.login/3
    end

    @desc "Create a photo"
    field :create_photo, :photo do
      arg :image_url, :string
      arg :caption, :string
      middleware Middleware.Authorize
      resolve &Resolvers.Posts.create_photo/3
    end

    @desc "Like or Unlike a photo"
    field :like_photo, :boolean do
      arg :photo_id, non_null(:id)
      middleware Middleware.Authorize
      resolve &Resolvers.Reactions.like_photo/3
    end
  end
end