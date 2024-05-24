import React, { CSSProperties, ReactElement, ReactNode } from 'react';
import { PaginationControl } from 'react-bootstrap-pagination-control';



export interface DataTableThead {
    element: string | ReactNode | ReactElement,
    style?: CSSProperties,
    className?: string,
    slug: string
}

export type DataTableItem = any | ReactNode
interface DataTableProps {
    thead: DataTableThead[]
    tboby: any
    totalCount: number
    pageContent: number
    currentPage: number
    changePage: (page: number) => void
}

export const DataTable: React.FC<DataTableProps> = ({ thead, tboby, totalCount, currentPage, changePage }) => {
    // const limit = 10;
    // const skip = ((currentPage - 1) * limit);
    const TbodyTdStyle = (key: string): any => {
        const getStyle = thead.find((it) => it.slug === key)
        if (getStyle?.className) {
            return getStyle?.className;
        }
    }
    return (
        <div className="table-responsive">
            <table
                className="table table-centered table-striped dt-responsive nowrap w-100 dataTable no-footer dtr-inline"
            >
                <thead>
                    <tr>
                        {
                            thead.map((item, index) => {
                                return (
                                    <th key={index} style={item.style} >
                                        {
                                            item.element
                                        }
                                    </th>
                                )
                            })
                        }
                    </tr>
                </thead>
                {/* .slice(skip, skip + limit) */}
                <tbody>
                    {
                        tboby.map((item: any, index: number) => {
                            return (
                                <tr key={index} className={index % 2 === 0 ? 'even' : 'odd'}>
                                    {
                                        Object.keys(item).map((itemth: any, index) => {
                                            return (
                                                <th key={index} className={TbodyTdStyle(itemth)}> {item[itemth]} </th>
                                            )
                                        })
                                    }
                                </tr>
                            )
                        })
                    }
                    <tr>

                    </tr>

                </tbody>
            </table>
            <div
                style={{
                    display: 'flex',
                    justifyContent: 'flex-end'
                }}
            >
                <PaginationControl
                    page={currentPage}
                    between={3}
                    total={totalCount}
                    limit={10}
                    changePage={(page) => changePage(page)}
                    ellipsis={1}
                />
            </div>
        </div>
    )
}