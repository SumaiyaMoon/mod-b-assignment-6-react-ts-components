type cardProps = {
    datasource: any[],
    cols: any[],
}
export default function Card(props: cardProps) {
    const { datasource, cols } = props;

    return (
        <>
            <div className=" row container">
                {datasource.map((data, dataIndex) => (

                    <div key={dataIndex} className="col-4 border border-2">

                        {cols.map((col, colIndex) => (

                            <div key={colIndex} className="">

                                <p><u>{col.heading}:</u> {data[col.key]}</p>

                            </div>

                        ))}

                        <br />

                    </div>

                ))}

            </div>
        </>
    );
};