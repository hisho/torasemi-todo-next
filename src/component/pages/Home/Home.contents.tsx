import { useUsersQuery } from '@src/graphql/documents/User/users.client.graphql'

export const HomeContents = () => {
  const { data, loading } = useUsersQuery()

  if (loading) {
    return <>loading</>
  }

  if (!data || data.users.length === 0) {
    return <>nodata</>
  }
  return (
    <>
      {data.users.map((user) => (
        <div key={user?.id}>{user?.name}</div>
      ))}
    </>
  )
}
