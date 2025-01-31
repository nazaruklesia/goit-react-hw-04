import { ThreeDots } from 'react-loader-spinner'
const Loader = () => {
  return (<ThreeDots
  visible={true}
  height="100"
  width="100"
  color="rgba(82, 16, 16, 0.895)"
  radius="9"
  ariaLabel="three-dots-loading"
  wrapperStyle={{}}
    wrapperClass=""
  />)
}

export default Loader;