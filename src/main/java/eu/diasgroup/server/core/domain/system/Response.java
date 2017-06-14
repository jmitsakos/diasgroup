package eu.diasgroup.server.core.domain.system;

import java.util.Calendar;
import java.util.UUID;

/**
 * The type Response is an abstract object containing all core functionality that needs to be implemented from extending classes.
 *
 * @param <T> the generic type
 */
public class Response<T> {

	/** The id. */
	private String transactionId;

	/** The date the {@link Response} was created on. */
	private String createdOn;

	/** The Data. */
	private T data;

	/** The fault. */
	private Fault fault;

	/** Instantiates a new Response. */
	public Response() {
		setBasicInfo();
	}

	/**
	 * Instantiates a new response.
	 *
	 * @param data the object that will be returned in the response's body
	 * @param fault the potential fault generated during the call execution
	 */
	public Response(final T data, final Fault fault) {
		setBasicInfo();
		this.data = data;
		this.fault = fault;
	}

	/**
	 * Instantiates a new response.
	 *
	 * @param data the object that will be returned in the response's body
	 */
	public Response(final T data) {
		setBasicInfo();
		this.data = data;
		this.fault = null;
	}

	/**
	 * Instantiates a new response.
	 *
	 * @param fault the potential fault generated during the call execution
	 */
	public Response(final Fault fault) {
		setBasicInfo();
		this.data = null;
		this.fault = fault;
	}

	/**
	 * Gets the transaction id.
	 *
	 * @return the transaction id
	 */
	public String getTransactionId() {
		return transactionId;
	}

	/**
	 * Gets the data.
	 *
	 * @return the data
	 */
	public T getData() {
		return data;
	}

	/**
	 * Sets the data.
	 *
	 * @param data the new data
	 */
	public void setData(final T data) {
		this.data = data;
	}

	/**
	 * Gets the fault.
	 *
	 * @return the fault
	 */
	public Fault getFault() {
		return fault;
	}

	/**
	 * Sets the fault.
	 *
	 * @param fault the new fault
	 */
	public void setFault(final Fault fault) {
		this.fault = fault;
	}

	/**
	 * Gets the created on.
	 *
	 * @return the created on
	 */
	public String getCreatedOn() {
		return createdOn;
	}

	/**
	 * Instantiates date and transaction id for the new response.
	 */
	private void setBasicInfo() {
		this.transactionId = UUID.randomUUID().toString().toUpperCase();
		this.createdOn = Calendar.getInstance().getTime().toString();
	}

	/** {@inheritDoc} */
	@Override
	public String toString() {
		final StringBuilder builder = new StringBuilder();
		builder.append("Response [transactionId=");
		builder.append(transactionId);
		builder.append(", createdOn=");
		builder.append(createdOn);
		builder.append(", data=");
		builder.append(data);
		builder.append(", fault=");
		builder.append(fault);
		builder.append("]");
		return builder.toString();
	}

}
