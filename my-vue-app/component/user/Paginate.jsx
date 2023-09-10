
import { Pagination } from 'antd';
const PaginationUser = () => (
  <>
    <Pagination
      total={60}
      showTotal={(total, range) => `${range[0]}-${range[1]} of ${total} items`}
      defaultPageSize={10}
      defaultCurrent={1}
    />
  </>
);
export default PaginationUser